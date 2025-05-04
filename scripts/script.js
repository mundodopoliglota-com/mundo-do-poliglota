window.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("scroll-top-container");
    const button = document.getElementById("scroll-top-button");

    window.addEventListener("scroll", () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent >= 15) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    });

    button.addEventListener("click", () => {
        window.scroll({ top: 0, behavior: "smooth" });
    });
});
