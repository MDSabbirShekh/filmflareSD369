/**
 * FilmflareSD369
 * Author: ḾĎ ẞâƃɀr ẞë̈ʞk
 */

document.addEventListener("DOMContentLoaded", () => {
    setupHeroButton();
    setupMovieButtons();
});

function setupHeroButton(): void {
    const btn = document.getElementById("getStartedBtn");
    btn?.addEventListener("click", () => {
        document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
    });
}

function setupMovieButtons(): void {
    document.querySelectorAll<HTMLButtonElement>(".movie-buttons button")
        .forEach(btn => {
            const action = btn.dataset.action;
            if (action === "play") {
                btn.onclick = () => alert("▶ Streaming will start soon.");
            }
            if (action === "download") {
                btn.onclick = () => alert("⬇ Download link coming soon.");
            }
        });
}
