// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
}

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true,     // Whether animation should happen only once
});
const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.1)";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});
