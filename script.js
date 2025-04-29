// Language Toggle Functionality
const langToggle = document.getElementById('langToggle');
let currentLang = 'ro';

// Function to update language visibility
function updateLanguageVisibility() {
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === currentLang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });

    // Update button text
    langToggle.textContent = currentLang === 'ro' ? 'EN' : 'RO';

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Event listener for language toggle button
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ro' ? 'en' : 'ro';
    updateLanguageVisibility();
});

// Initialize language visibility
updateLanguageVisibility();

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
}); 