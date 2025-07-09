// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const clock = document.getElementById('clock');
const searchInput = document.getElementById('search-input');

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const formMessage = document.getElementById('form-message');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Change icon based on mode
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Scroll-to-top button behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Live Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Real-time form validation
function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (isNameValid && isEmailValid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    contactForm.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix the errors above and try again.';
  }
});

// Search filter for features
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const featureBoxes = document.querySelectorAll('.feature-box');

  featureBoxes.forEach(box => {
    const text = box.textContent.toLowerCase();
    if (text.includes(filter)) {
      box.style.display = '';
    } else {
      box.style.display = 'none';
    }
  });
});
