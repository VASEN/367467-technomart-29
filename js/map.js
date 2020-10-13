const mapOpen = document.querySelector(".about-us__mini-map");
const mapModal = document.querySelector(".modal-map");
const mapClose = mapModal.querySelector(".modal__button--close");
const mapOverlay = mapModal.querySelector(".modal__overlay");


mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal__show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt){
  if (evt.code === "Escape" || evt.key == 27) {
    if (mapModal.classList.contains("modal__show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal__show");
    }
  }
});

mapOverlay.addEventListener("click", function () {
  mapModal.classList.remove("modal__show");
})
