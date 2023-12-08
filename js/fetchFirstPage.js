document.addEventListener('DOMContentLoaded', function () {
    fetch('../pages/latest.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('first-page').innerHTML = data;
        });
});

