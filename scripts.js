document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("🎉 Thanks for booking your adventure! We'll email you details soon.");
        form.reset();
    });
});
