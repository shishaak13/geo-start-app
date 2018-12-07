const form = document.querySelector('form');
document.querySelector('#button').addEventListener('click', () => {
    document.querySelector('#sidebar').classList.add('sidebar_show');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('/settings', { method: "POST", body: formData })
        .then((response) => {
            console.log(response);
        })
});