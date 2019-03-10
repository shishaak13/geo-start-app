const GoogleMap = require('./modules/google.api');
const config = require('./config.json');
const myApiMap = new GoogleMap();

myApiMap.init('#map', {
    center: { lat: 59.944098, lng: 30.307179 },
    zoom: 14,
    disableDefaultUI: true,
    styles: config.googleMap.style
});