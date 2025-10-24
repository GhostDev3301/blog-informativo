// 🔹 Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});

// 🔹 Navbar transparente -> con fondo al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 🔹 Menú responsive
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 🔹 Animaciones al hacer scroll (Intersection Observer)
const faders = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right");

const appearOptions = {
  threshold: 0.2, // Se activa cuando el 20% de la sección entra en pantalla
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = "1";
    entry.target.style.transform = "translate(0,0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = "0"; // Inicialmente oculto
  fader.style.transition = "all 0.8s ease-out";
  appearOnScroll.observe(fader);
});
