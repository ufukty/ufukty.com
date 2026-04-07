"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  
  function toggle() {
    const isWide = window.innerWidth > 1000;
    const isTall = document.documentElement.scrollHeight >= 2 * window.innerHeight;
    toc.style.display = isWide && isTall ? "block" : "none";
  }
  
  window.addEventListener("resize", toggle);
  toggle();
});
