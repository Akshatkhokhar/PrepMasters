let userLoggedIn = false; // Track if user is logged in

// Show the respective section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Show profile icon if the user is logged in
    if (userLoggedIn) {
        document.getElementById('profileIcon').style.display = 'block';
    } else {
        document.getElementById('profileIcon').style.display = 'none';
    }
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    // Assume user is signed up successfully
    userLoggedIn = true;
    showSection('home'); // Redirect to home after signup
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    // Assume user is logged in successfully
    userLoggedIn = true;
    showSection('home'); // Redirect to home after login
}

// Handle profile view (this is just a placeholder for now)
function handleProfile() {
    showSection('profile');
}
