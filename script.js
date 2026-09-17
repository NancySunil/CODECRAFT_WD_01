// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    // Change Navbar Background Color on Scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        
        let currentSection = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Toggle
    menuToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });

    // Close mobile menu when a navigation item is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinksContainer.classList.remove('active');
        });
    });
});