const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
const sections = document.querySelectorAll(".content-section");
const navLinks = document.querySelectorAll(".main-nav a");

function switchTab(targetId) {
  const cleanId = targetId.replace("#", "");
  const targetSection = document.getElementById(cleanId);

  if (!targetSection) return;

  sections.forEach((sec) => sec.classList.remove("is-active"));
  targetSection.classList.add("is-active");

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${cleanId}`,
    );
  });

  window.scrollTo(0, 0);

  if (mainNav && mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// Klicks auf Hauptmenü und interne Tab-Buttons abfangen
document.querySelectorAll(".main-nav a, [data-tab]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      switchTab(href);
    }
  });
});

const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
