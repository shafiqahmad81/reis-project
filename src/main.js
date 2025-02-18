
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.querySelectorAll('.menu-item');

// Toggle menu
menuBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing when clicking the button
    mobileMenu.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileMenu.classList.add('hidden');
    }
});

// Close menu when clicking a menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    });
});