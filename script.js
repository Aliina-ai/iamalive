// Fade-in секцій при скролі
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

// Легка пульсація NFT при наведенні
const nftItems = document.querySelectorAll(".nft-item img");
nftItems.forEach(img => {
  img.addEventListener("mousemove", e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.transform = `rotateY(${(x-rect.width/2)/10}deg) rotateX(${-(y-rect.height/2)/10}deg) scale(1.05)`;
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
})
