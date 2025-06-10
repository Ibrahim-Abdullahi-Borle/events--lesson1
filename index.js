// bad way
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("clicked");
};

// great way
const ibrahim = document.querySelector(".best");

ibrahim.addEventListener("click", () => {
  console.log("someone hitted me ");
});