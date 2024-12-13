// Validate the form fields
document.querySelector("form").addEventListener("submit", function(event) {
    const orgName = document.getElementById("org-name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!orgName || !username || !email || !password) {
        event.preventDefault();
        alert("All fields are required!");
    }
});
