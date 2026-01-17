const textarea = document.querySelector("textarea");
const counter = document.querySelector(".post-footer span");

textarea.addEventListener("input", () => {
  counter.textContent = `${textarea.value.length}/1280`;
});

