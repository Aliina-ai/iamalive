// Simple JS animations (scroll fade-in, optional)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

window.addEventListener("load", () => {
  const intro = document.getElementById("intro-wrapper");
  const content = document.getElementById("site-content");

  // Показуємо анімацію 4 секунди
  setTimeout(() => {
    intro.classList.add("shrink");
    content.classList.remove("hidden");
    content.classList.add("visible");
  }, 4000);
});

