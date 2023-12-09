document.addEventListener('DOMContentLoaded', function () {
    // Fetch HTML content
    fetch('./pages/latest.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('first-page').innerHTML = data;
        });

    // Fetch CSS content
    fetch('./css/style.css') // Adjust the path to your CSS file
        .then(response => response.text())
        .then(cssData => {
            // Create a <style> element and append the CSS content
            const styleElement = document.createElement('style');
            styleElement.innerHTML = cssData;
            
            // Append the <style> element to the document's head
            document.head.appendChild(styleElement);
        });
});
