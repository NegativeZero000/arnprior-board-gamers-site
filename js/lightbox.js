document.querySelectorAll(".cs-gallery img").forEach((img) => {
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.className = "image-lightbox";

        const largeImage = document.createElement("img");
        largeImage.src = img.src;
        largeImage.alt = img.alt;

        overlay.appendChild(largeImage);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.addEventListener("keydown", function closeLightbox(e) {
            if (e.key === "Escape") {
                overlay.remove();
                document.removeEventListener("keydown", closeLightbox);
            }
        });
    });
});