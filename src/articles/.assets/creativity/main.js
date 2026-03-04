/** @type {HTMLVideoElement} */
const video = document.getElementById("creativity-video");
const query = window.matchMedia("(prefers-color-scheme: dark)");

function switchVideo(isDark) {
  const switchTime = video.currentTime || 0;
  const wasPaused = video.paused;
  if (isDark) {
    video.poster = ".assets/creativity/dark.png";
    video.innerHTML = `<source src=".assets/creativity/dark.mp4" type="video/mp4"><source src=".assets/creativity/dark.webm" type="video/webm">`;
  } else {
    video.poster = ".assets/creativity/light.png";
    video.innerHTML = `<source src=".assets/creativity/light.mp4" type="video/mp4"><source src=".assets/creativity/light.webm" type="video/webm">`;
  }
  video.load();
  video.addEventListener(
    "loadedmetadata",
    () => {
      try {
        video.currentTime = Math.min(switchTime, video.duration || switchTime);
        if (wasPaused) video.pause();
        else video.play();
      } catch {}
    },
    { once: true },
  );
}

switchVideo(query.matches);
query.addEventListener("change", (e) => switchVideo(e.matches));
