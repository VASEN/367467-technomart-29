var mapOpen = document.querySelector(".about-us__mini-map");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal__button--close");

mapOpen.addEventListener("click", function () {
  map.classList.add("modal__show");
});

mapClose.addEventListener("click", function () {
  map.classList.remove("modal__show");
})
