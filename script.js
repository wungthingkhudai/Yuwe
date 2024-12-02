// Theme Switcher Script
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");

    // Change button text based on theme
    if (bodyElement.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
});
