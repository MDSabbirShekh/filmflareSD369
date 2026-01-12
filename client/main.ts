/**
 * FilmflareSD369
 * Author: ḾĎ ẞâƃɀr ẞë̈ʞk
 */

document.addEventListener("DOMContentLoaded", () => {
    setupHeroButton();
    setupMovieButtons();
});

function setupHeroButton(): void {
    const btn = document.querySelector<HTMLButtonElement>(".hero button");
    if (!btn) return;

    btn.addEventListener("click", () => {
        document
            .querySelector(".movie-section")
            ?.scrollIntoView({ behavior: "smooth" });
    });
}

function setupMovieButtons(): void {
    document.querySelectorAll<HTMLButtonElement>(".btn-play").forEach((btn) => {
        btn.addEventListener("click", () => {
            const url = btn.dataset.playUrl;
            if (!url) return;

            // Google Drive preview opens correctly everywhere
            window.location.href = url;
        });
    });

    document.querySelectorAll<HTMLButtonElement>(".btn-download").forEach((btn) => {
        btn.addEventListener("click", () => {
            const url = btn.dataset.downloadUrl;
            if (!url) return;

            // Forces download
            window.location.href = url;
        });
    });
}
