document.addEventListener("DOMContentLoaded", function () {
    const selectMenu = document.getElementById("contact-method");
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");

    selectMenu.addEventListener("change", function () {
        emailInput.style.display = "none";
        phoneInput.style.display = "none";

        if (selectMenu.value === "email") {
            emailInput.style.display = "block";
        } else if (selectMenu.value === "phone") {
            phoneInput.style.display = "block";
        }
    });
});