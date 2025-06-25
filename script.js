// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Example: Add active class to nav based on scroll
  window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

  // career form submission handler

  document.getElementById('careerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.classList.add('d-none');
    document.getElementById('successMessage').classList.remove('d-none');
  });


  


