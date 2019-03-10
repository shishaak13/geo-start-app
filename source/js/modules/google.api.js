require("babel-polyfill");

module.exports = class {
    constructor() { }

    init(el, config) {
        this.map = new google.maps.Map(document.querySelector(el), config);

        this.map.addListener('click', async (e) => {
            const coords = { lat: e.latLng.lat(), lng: e.latLng.lng() }
            const address = await this.getAddress(coords);

            const popup = document.querySelector('.popup');

            popup.textContent = address;
            popup.style.display = 'flex';
        });
    }

    createPlacemark(coords) {
        const marker = new google.maps.Marker({
            position: coords,
            map: this.map
        });
    }

    async getAddress(coords) {
        const response = await this.geocoder(coords);

        return response[0].formatted_address;
    }

    geocoder(coords) {
        return new Promise((resolve, reject) => {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'location': coords }, (response, status) => {
                if (status === 'OK') {
                    resolve(response);
                } else {
                    reject(new Error('Geocoder failed due to: ' + status))
                }
            })
        })
    }
}