const buttons = document.querySelectorAll(".card");
const reasonText = document.getElementById("reason");
const reasonCounter = document.getElementById("reasonCounter");
let counter = 3;
const container = document.querySelector(".container");
const transition = document.querySelector(".exTransition");
const head1 = document.getElementById("head1");
const head2 = document.getElementById("head2");
const head3 = document.getElementById("head3");
const rickroll = document.querySelector(".rickroll");
const video = document.getElementById("rickVideo");
const getback = document.getElementById("getback");
const roasts = [
    // 1
    "Too tired? Funny. Your phone's is at 2% & somehow it's still working harder than you.",
    // 2
    "Tomorrow called. It said you're becoming a regular customer.",
    // 3
    "No time? You spent 17 minutes deciding what to watch while eating.",
    // 4
    "Not motivated? Good. Discipline was supposed to show up anyway.",
    // 5
    "Gym is too far? Your thumb traveled further scrolling reels today.",
    // 6
    "It's raining? Excellent. Now the weather is getting blamed too."
];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        reasonText.classList.remove("fade-in");
        void reasonText.offsetWidth;
        reasonText.textContent = roasts[i];
        reasonText.classList.add("fade-in");
        counter--;
        reasonCounter.textContent = counter;
        if (counter === 0){
            container.classList.add("hide");
            transition.classList.add("show")

            head1.classList.add("reveal");

            setTimeout(() => {
                head1.classList.remove("reveal");
                head2.classList.add("reveal");
            }, 1500);

            setTimeout(() => {
                head2.classList.remove("reveal");
                head3.classList.add("reveal");
            }, 3000);
            setTimeout(() => {
                head3.classList.remove("reveal");
                rickroll.classList.add("show");
                video.play();
            }, 4500);
        }
    })
};

getback.addEventListener("click", () => {
    window.location.href = "index.html";
})