document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    document.getElementById("contact-form").reset();
});
