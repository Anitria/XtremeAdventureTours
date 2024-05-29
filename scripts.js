// scripts.js

// Function to handle booking
function handleBooking(tourName) {
  alert(`You have successfully booked the ${tourName}!`);
}

// Add event listeners to booking buttons
document.getElementById('book-tour1').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action (navigation)
  handleBooking('Mountain Expedition');
});

document.getElementById('book-tour2').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action (navigation)
  handleBooking('Desert Safari');
});

document.getElementById('book-tour3').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action (navigation)
  handleBooking('Jungle Trekking');
});

// Login functionality
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginBtn.addEventListener('click', function() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username && password) {
      sessionStorage.setItem('username', username);
      alert(`Welcome, ${username}!`);
      usernameInput.style.display = 'none';
      passwordInput.style.display = 'none';
      loginBtn.style.display = 'none';
      forgotPasswordBtn.style.display = 'none';
      logoutBtn.style.display = 'inline';
  } else {
      alert('Please enter both username and password.');
  }
});

logoutBtn.addEventListener('click', function() {
  sessionStorage.removeItem('username');
  alert('You have successfully logged out.');
  usernameInput.style.display = 'inline';
  passwordInput.style.display = 'inline';
  loginBtn.style.display = 'inline';
  forgotPasswordBtn.style.display = 'inline';
  logoutBtn.style.display = 'none';
});

forgotPasswordBtn.addEventListener('click', function() {
  alert('Password reset instructions have been sent to your email.');
});

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
  const username = sessionStorage.getItem('username');
  if (username) {
      usernameInput.style.display = 'none';
      passwordInput.style.display = 'none';
      loginBtn.style.display = 'none';
      forgotPasswordBtn.style.display = 'none';
      logoutBtn.style.display = 'inline';
  }
});
