function showClue(num) {
  document.getElementById("clue" + num).classList.remove("hidden");
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
}

function showClue(num) {
  document.getElementById("clue" + num).classList.remove("hidden");
  launchConfetti(); // 🎉 launches confetti when clue appears
}

window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.muted = false; 
  music.play().catch(() => {
    console.log("Autoplay blocked, trying again...");
    setTimeout(() => music.play(), 2000);
  });
});

function startExperience() {
  document.getElementById("start-screen").style.display = "none";
  const music = document.getElementById("bg-music");
  music.play();
  launchConfetti();
}
