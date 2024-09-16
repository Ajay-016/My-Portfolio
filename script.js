document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;

    window.location.href = mailtoLink;
});
