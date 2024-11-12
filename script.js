// Simple example to handle form submission dynamically (Optional)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    this.reset();
});
