// Helper functions to toggle the dark-mode class
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}

// Check for saved user preference on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    enableDarkMode();
}

// Event listener for CodeStitch toggle button
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#dark-mode-toggle'); // Verify this ID matches your navigation HTML ID
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
        });
    }
});
