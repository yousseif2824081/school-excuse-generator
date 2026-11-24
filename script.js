const excuses = [
    "my cat locked the door from outside and took the keys with her.",
    "My bed kidnapped and refused to let me go.",
    "My alarm clock forgot to wake me up.",
    "My pillow said I needed one more hour of sleep.",
    "My cat sat on my school bag and refused to move.",
    "Me and my shoes were playing hide and seek, and I couldn't find them.",
    "I woke up in the wrong way.",
    "My blanket gave me a hug and I couldn't resist it.",
    "I was busy teaching my goldfish how to swim.",
    "I had an important meeting with mr teady bear.",
    "My dog ate my school time table.",
    "I forgot how to open the front door of our house.",
    "My socks were fighting and I had to stop them.",
    "My mirror told me that I looked too tired for school today.",
    "My alarm ranged but I thought that my mum was calling me.",
    "I was looking for motivation, I still can't find it.",
    "My shoes were not in the mood for walking.",
    "I got stuck in my own blanket.",
    "My little sister used my school bag as a dolls house",
    "I was trying to teach my pets some math",
    "My breakfast took longer than expected to eat.",
    "My dog looked sad, so I stayed home with him",
    "I made my alarm at 8 pm instead of 8 am",
    "I accidentally wore my shirt backwards and gave up",
    "I had a fight with my alarm clock and lost sadly.",
    "My cats snoozed all my alarms 10 hours.",
    "I was waiting for my breakfast to cool down, but it was taking forever.",
    "I forgot where I put my school.",
    "My hair needed a full meeting before I left.",
    "I had to wait for my phone to wake up",
    "I was stucking watching one more video",
    "I accidentally set my alarm for next year",
    "My brain was still loading",
    "I couldn't find the exit from my blanket",
    "My house was too comfortable to leave",
    "My alarm clock needed a vacation",
    "My dogs wanted to watch cartoons with me.",
    "I forgot how to tie my shoes",
    "My breakfast was having a bad day",
    "I had to protect my cookies from my family",
    "I was busy doing absolutely nothing.",
    "My dog needed me to watch him sleep.",
    "My alarm clock and I are no longer friends.",
    "My brain was on airplane mode",
    "I got distracted by a very interesting roof.",
    "My dog ate my alarm clock. Again.",
    "I was too busy searching for my lost homework.",
    "I was trying to teach my fridge to sing.",
    "My sandwich fell apart, and I had to fix it.",
    "My dog needed emotional support."
]

const excuseEl = document.getElementById("excuse");
const copyBtn = document.getElementById("copy");
const themeBtn = document.getElementById("theme");

let hasExcuse = false;

document.getElementById("generate").addEventListener("click", () => {
    const i = Math.floor(Math.random() * excuses.length);
    excuseEl.textContent = excuses[i];
    hasExcuse = true;
    copyBtn.textContent = "Copy Excuse";
});

copyBtn.addEventListener("click", () => {
    if (!hasExcuse) return;
    navigator.clipboard.writeText(excuseEl.textContent);
    copyBtn.textContent = "Copied!";
});

document.addEventListener("pointermove", (e) => {
    const rect = themeBtn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;
    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    if (distance < 100) {
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;
        themeBtn.style.left = Math.random() * maxX + "px";
        themeBtn.style.top = Math.random() * maxY + "px";
    }
});