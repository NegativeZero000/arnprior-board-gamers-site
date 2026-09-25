// Helper functions to toggle the dark-mode class

function updateLogo() {
    const logos = document.querySelectorAll(".cs-logo");

    logos.forEach((logo) => {
        const img = logo.querySelector("img");

        if (img) {
            img.src = document.body.classList.contains("dark-mode")
                ? "src/assets/icons/abg_logo_w_text_dark.svg"
                : "src/assets/icons/abg_logo_w_text.svg";
        }
    });
}

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
}

// Check for saved user preference on load
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    enableDarkMode();
}

// Event listener for CodeStitch toggle button
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#dark-mode-toggle"); // Verify this ID matches your navigation HTML ID

    // Set the correct logo when the page loads
    updateLogo();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
            // Update the logo to reflect the change
            updateLogo();
        });
    }
});
