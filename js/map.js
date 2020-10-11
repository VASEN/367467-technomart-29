let mapOpen = document.querySelector(".about-us__mini-map");
let map = document.querySelector(".modal-map");
let mapClose = map.querySelector(".modal__button--close");

mapOpen.addEventListener("click", function () {
  map.classList.add("modal__show");
});

mapClose.addEventListener("click", function () {
  map.classList.remove("modal__show");
});

