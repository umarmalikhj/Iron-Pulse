const form = document.querySelector("form");
const container = document.querySelector(".container");
const successCard = document.querySelector(".success-card");
const welcomeName = document.getElementById("welcomeName");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formDetails = new FormData(form);
    const userName = formDetails.get("name");
    welcomeName.innerText = userName + ", your transformation starts today.";

    container.classList.add("hide");


    setTimeout(() => {
        successCard.classList.add("show");
    }, 400);
});

