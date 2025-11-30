// =========================
// LANGUAGE SWITCH (data-en / data-ua)
// =========================
function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  setLang(lang);
});


// =========================
// MATRIX BACKGROUND
// =========================
const canvas = document.getElementById("matrix");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01IAMLIVEAI";
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: columns }).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffe0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);

  // Адаптація під зміну розміру вікна
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
