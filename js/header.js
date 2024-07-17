document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.add('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
