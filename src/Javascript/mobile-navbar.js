const navbar = document.querySelector('.list-nav');
const toggleNavbar = document.querySelector('.mobile-menu');

toggleNavbar.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

