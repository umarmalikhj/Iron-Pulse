const buttons = document.querySelectorAll(".card");
const reasonText = document.getElementById("reason");
const reasonCounter = document.getElementById("reasonCounter");
let counter = 3;
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
            
        }
    })
}