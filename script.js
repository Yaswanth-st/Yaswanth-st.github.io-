document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        document.getElementById('formResponse').innerHTML = `Thank you, ${name}. Your message has been sent successfully!`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResponse').innerHTML = 'Please fill out all fields before submitting.';
        document.getElementById('formResponse').style.color = 'red';
    }
});
