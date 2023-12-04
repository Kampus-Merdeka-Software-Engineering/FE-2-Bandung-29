// script.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('/widget/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-navi').innerHTML = data;
        });
});

