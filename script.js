const toggle = document.querySelector(".flex-head");
const cards = document.querySelector(".display");

toggle.addEventListener("change", () => {
    cards.classList.toggle("show-monthly");
  });
