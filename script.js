const messages = [
  "You are doing amazing 💖",
  "One step at a time, Pachu 🌸",
  "This exam does not define you ✨",
  "Hannu believes in you 🧸",
  "I’m always proud of you 💗",
  "You are the strongest person I ever know 🌸",
  "The kindest, bootiful human being 💖",
  "You have got this bubu, fighting ✨"
];

function showMessage() {
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[random];
}

// ⏳ Countdown to exam end (Jan 21)
const endDate = new Date("January 21, 2026 23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Exams are over 💕";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    `${days} days ${hours} hrs ${minutes} min`;
}, 1000);

