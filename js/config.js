const siteConfig = {
    name: "Arnprior Board Gamers",
    tagline: "Best Community Group in Town",
    description: "A weekly hangout to socialize, hang out and most importantly, play board games",
    email: "info@example.com",
    discord: "https://discord.gg/example"
};

document.querySelectorAll("[data-config]").forEach(element => {
    const key = element.dataset.config;
    element.textContent = siteConfig[key];
});