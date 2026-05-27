function myFunction() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

const findExcuse = document.getElementById("excuse");
const jointheGrind = document.getElementById("join");

findExcuse.addEventListener("click", () => {
    window.location.href = "findexcuses.html";
})

jointheGrind.addEventListener("click", () => {
    window.location.href = "jointhegrind.html";
})