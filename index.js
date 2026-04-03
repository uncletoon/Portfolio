const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

// Theme Toggle Logic
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const currentTheme = localStorage.getItem("theme");

// Check for saved theme preference, otherwise default to light
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeIcon.src = "dark-mode.png";
  }
}

themeToggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  let newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  themeIcon.src = newTheme === "dark" ? "dark-mode.png" : "mode.png";
});
