const input = document.querySelector("input");
const button = document.querySelector("button");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

const feed = document.createElement("div");
document.body.appendChild(feed);

function renderPosts() {
  feed.innerHTML = "";
  posts.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    p.style.padding = "10px";
    p.style.margin = "10px 0";
    p.style.background = "#1f1f1f";
    p.style.borderRadius = "8px";
    feed.appendChild(p);
  });
}

button.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  posts.unshift(input.value);
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value = "";
  renderPosts();
});

renderPosts();




