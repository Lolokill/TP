// Mock user data (replace with database integration in real application)
let users = [
    { username: "admin", password: "admin" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if user exists and credentials match
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Store logged-in user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to main page
        window.location.replace('index.html');
    } else {
        alert('Invalid username or password');
    }
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username is already taken
    if (users.some(u => u.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Add new user to mock database (in real application, send to server)
    users.push({ username, password });
    alert('Registration successful! Please login with your new credentials.');
    // Redirect to login page
    window.location.replace('login.html');
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.replace('login.html');
}

function checkLogin() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser && !window.location.href.includes('login.html') && !window.location.href.includes('register.html')) {
        window.location.replace('login.html');
    } else if (currentUser && window.location.href.includes('login.html')) {
        window.location.replace('index.html');
    } else if (currentUser && window.location.href.includes('admin.html')) {
        const user = JSON.parse(currentUser);
        if (user.username !== 'admin') {
            // Redirect to main page if current user is not admin
            window.location.replace('index.html');
        } else {
            // Show admin panel content
            document.getElementById('admin-actions').style.display = 'block';
            document.getElementById('admin-message').textContent = `Logged in as: ${user.username}`;
        }
    }
}

// Event listeners
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', login);
}

if (document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener('submit', register);
}
