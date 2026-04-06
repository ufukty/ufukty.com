"use strict";

const toc = document.getElementById("toc");

function toggle() {
  toc.style.display = document.documentElement.scrollHeight >= 2 * window.innerHeight ? "block" : "none";
}

window.addEventListener("resize", toggle);
toggle();
