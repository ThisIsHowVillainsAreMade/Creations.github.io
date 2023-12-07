document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("toggle-audio");
  const music = document.getElementById("music");

  playButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      playButton.textContent = "Pause";
    } else {
      music.pause();
      playButton.textContent = "Play";
    }
  });
});

// SETTING THE VOLUME OF THE AUDIO
let audio = document.getElementById("music");
audio.volume = 0.1;
