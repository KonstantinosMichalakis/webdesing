// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Portfolio Filtering
const filterPortfolio = (category) => {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        item.style.display = item.dataset.category === category || category === 'all' ? 'block' : 'none';
    });
};

// Form Handling
const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data (e.g., send to server)
    alert(`Form submitted with data: ${JSON.stringify(Object.fromEntries(formData))}`);
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(link.getAttribute('href'));
        });
    });

    // Initialize portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterPortfolio(category);
        });
    });

    // Initialize form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Interactive animations can be added here
    // Example: Fade in elements on scroll
});