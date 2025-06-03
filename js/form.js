document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const userEmail = document.getElementById('email').value;
        const message = document.getElementById('reason').value;

        const mailtoLink = `mailto:jayaporalla921@gmail.com?subject=Message from ${encodeURIComponent(userEmail)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    });
});