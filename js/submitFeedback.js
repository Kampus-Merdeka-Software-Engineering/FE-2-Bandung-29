document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

      
        showNotification("Form submitted successfully!");
        form.reset();

        // fetch("your_server_endpoint", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ email: email, message: message }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the server response
        //     console.log(data);
        //     showNotification("Form submitted successfully!");
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        //     showNotification("An error occurred. Please try again later.");
        // });
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