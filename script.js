const findExcuse = document.getElementById("excuse");
const jointheGrind = document.getElementById("join");
const navLinks = document.getElementById("nav-links");
const navIcon = document.getElementById("hamIcon");

findExcuse.addEventListener("click", () => {
    window.location.href = "findexcuses.html";
});

jointheGrind.addEventListener("click", () => {
    window.location.href = "jointhegrind.html";
});

navIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})