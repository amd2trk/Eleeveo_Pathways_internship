function validateForm() {
    // Get form elements
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const subject = document.getElementById('Subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check required fields
    if (!fullName) {
        alert('Please enter your full name.');
        return false;
    }
    if (!email) {
        alert('Please enter your email address.');
        return false;
    }
    if (!subject) {
        alert('Please enter a subject.');
        return false;
    }
    if (!message) {
        alert('Please enter a message.');
        return false;
    }

    // ✅ Full name validation: must contain at least two words
    const nameParts = fullName.split(" ");
    if (nameParts.length < 2) {
        alert("Please enter your full name (first and last).");
        return false;
    }

    // ✅ Subject validation: at least 3 characters
    if (subject.length < 3) {
        alert("Subject must be at least 3 characters long.");
        return false;
    }

    // ✅ Message validation: at least 10 characters
    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return false;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}
