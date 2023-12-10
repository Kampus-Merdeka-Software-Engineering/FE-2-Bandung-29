document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var nama = document.getElementById("name").value

      
        showNotification("Form submitted successfully!");
        form.reset();
    });

    function showNotification(message) {
        var notification = document.getElementById("notification");
        notification.textContent = message;
        notification.style.display = "block";

        setTimeout(function () {
            notification.style.display = "none";
        }, 3000);
    }
});