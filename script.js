document.addEventListener('DOMContentLoaded', function () {

  /* ===============================
     Smooth Scroll for Nav Links
  =============================== */
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


  /* ===============================
     Active Nav Link on Scroll
  =============================== */
  window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 100) {
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


  /* ===============================
     Career Form (Safe Check)
  =============================== */
  const careerForm = document.getElementById('careerForm');
  if (careerForm) {
    careerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      this.classList.add('d-none');

      const successMessage = document.getElementById('successMessage');
      if (successMessage) {
        successMessage.classList.remove('d-none');
      }
    });
  }


  /* ===============================
     Scroll To Top Button
  =============================== */
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  }

});
