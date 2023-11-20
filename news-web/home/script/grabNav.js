// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Load header content using JavaScript
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-navi').innerHTML = data;
        });
});
