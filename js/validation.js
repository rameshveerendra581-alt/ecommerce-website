$(document).ready(function () {
    $("#contactForm").submit(function (e) {
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required");
            e.preventDefault();
        } else {
            alert("Form submitted successfully");
        }
    });
});
