
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-info");
    const signupForm = document.getElementById("signup-info");
    const showSignupLink = document.getElementById("showSignup");
    const showLoginLink = document.getElementById("showLogin");

    showSignupLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Hide login form
        loginForm.style.display = "none";
        // Show signup form
        signupForm.style.display = "none";
    });

    showLoginLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Hide signup form
        signupForm.style.display = "none";
        // Show login form
        loginForm.style.display = "none";
    });
});


