// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    const isMenuHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');

    // Add slide animation classes
    if (isMenuHidden) {
        mobileMenu.classList.add('animate-slide-in');
        mobileMenu.classList.remove('animate-slide-out');
    } else {
        mobileMenu.classList.add('animate-slide-out');
        mobileMenu.classList.remove('animate-slide-in');
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
Array.from(mobileMenuLinks).forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
