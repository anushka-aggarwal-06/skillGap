document.addEventListener('DOMContentLoaded', () => {
    // Login Form Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (email && password.length >= 6) {
                showAlert('login-form', 'success', 'Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to home page
                }, 2000);
            } else {
                showAlert('login-form', 'error', 'Please enter a valid email and password (min 6 characters).');
            }
        });
    }

    // Signup Form Validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            if (name && email && password.length >= 6) {
                showAlert('signup-form', 'success', 'Signup successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = 'login.html'; // Redirect to login page
                }, 2000);
            } else {
                showAlert('signup-form', 'error', 'Please fill all fields and ensure password is at least 6 characters.');
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            if (name && email && message) {
                showAlert('contact-form', 'success', 'Message sent successfully!');
                contactForm.reset();
            } else {
                showAlert('contact-form', 'error', 'Please fill all fields.');
            }
        });
    }

    // Helper function to show alerts
    function showAlert(formId, type, message) {
        let alert = document.querySelector(`#${formId} .alert`);
        if (!alert) {
            alert = document.createElement('div');
            alert.className = `alert ${type}`;
            document.querySelector(`#${formId}`).prepend(alert);
        }
        alert.textContent = message;
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    }
});