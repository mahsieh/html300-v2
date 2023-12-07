/* original code https://codepen.io/thecalicoder */
// define the necessary variables and transitions required
const appRoot = document.getElementById("page");
const nav = document.querySelector(".navigation");
const root = document.documentElement;
const endTransition = () => {
  const loader = document.querySelector(".loader");
  loader.addEventListener("transitionend", () => {
    loader.style.transform = "translateX(100%)";
    root.classList.remove("disable-hover");
  });
  loader.style.transform = "";
};

const startTransition = () => {
  const loader = document.querySelector(".loader");
  loader.style.transform = "translateX(100%)";
  appRoot.dataset.route = "a";
};

// wait for the user to click
nav.addEventListener("click", e => {
  if (e.target.nodeName === "A") {
    let a = Array.from(nav.children).find(v => v.closest(".active"));
    root.classList.add("disable-hover");
    a.classList.remove("active");
    e.target.classList.add("active");
    e.preventDefault();
  }
});

// depending on which the user clicked, show appropriate text
const onRouteClick = route => {
  if (appRoot.dataset.route === route) return;
  appRoot.dataset.route = route;
  endTransition();
};

// run the transition when we first load the page
window.addEventListener("load", () => {
  startTransition();
});