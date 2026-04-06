"use strict";

const toc = document.getElementById("toc");

function toggle() {
  toc.style.display = document.documentElement.scrollHeight >= 2 * window.innerHeight ? "visible" : "hidden";
}

window.addEventListener("resize", toggle);
toggle();
