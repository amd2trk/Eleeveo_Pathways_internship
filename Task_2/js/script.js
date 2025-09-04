document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        clearErrors();

        const isFormValid = validateForm();

        if (isFormValid) {
            alert('Form submitted successfully!');
            form.reset(); 
        }
    });

    function validateForm() {
        let isValid = true;

        const fullName = document.getElementById('full-name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        if (fullName.value.trim() === '') {
            showError(fullName, 'Please enter your full name.');
            isValid = false;
        } else if (fullName.value.trim().split(' ').length < 2) {
            showError(fullName, 'Please enter both first and last names.');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Please enter your email address.');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        }

        if (subject.value.trim() === '') {
            showError(subject, 'Please enter a subject.');
            isValid = false;
        } else if (subject.value.trim().length < 5) {
            showError(subject, 'Subject must be at least 5 characters long.');
            isValid = false;
        }

        if (message.value.trim() === '') {
            showError(message, 'Please enter a message.');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters long.');
            isValid = false;
        }

        return isValid;
    }

    function showError(inputElement, message) {
        const errorSpan = inputElement.nextElementSibling;
        errorSpan.textContent = message;
        inputElement.style.borderColor = '#e53e3e'; 
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(span => span.textContent = '');

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => input.style.borderColor = '#ccc');
    }
});