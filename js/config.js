const siteConfig = {
    name: "Arnprior Board Gamers",
    tagline: "Best Community Group in Town",
    description: "A weekly meet up to socialize, hang out and most importantly, play board games",
    email: "info@example.com",
    discord: "https://discord.gg/example",
    aboutHeader: "About Arnprior Board Gamers"
};

document.querySelectorAll("[data-config]").forEach(element => {
    const key = element.dataset.config;
    element.textContent = siteConfig[key];
});

const emailLink = document.getElementById("email-link");

emailLink.addEventListener("click", function (event) {
    event.preventDefault();

    window.open(
        "https://mailhide.io/e/9ATyLdcb",
        "mailhidepopup",
        "width=580,height=635"
    );
});