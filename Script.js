
// CRAFTIVE DIGITAL - JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Reveal sections on scroll
  const revealElements = document.querySelectorAll(
    ".service-card, .about, .contact, .hero-content"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });

  // Current year in footer
  const footer = document.querySelector("footer p");

  if (footer) {
    footer.textContent =
      "© " + new Date().getFullYear() +
      " Craftive Digital. All rights reserved.";
  }

});
