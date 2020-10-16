const mapOpen = document.querySelector(".about-us__mini-map");
const mapModal = document.querySelector(".modal-map");
const mapClose = mapModal.querySelector(".modal__button--close");
const mapOverlay = mapModal.querySelector(".modal__overlay");
const mapContent = mapModal.querySelector(".modal__content");


mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal__show");
  mapContent.classList.add("modal__content--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal__show");
  mapContent.classList.remove("modal__content--show");
});

window.addEventListener("keydown", function (evt){
  if (evt.code === "Escape" || evt.key === "27") {
    if (mapModal.classList.contains("modal__show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal__show");
      mapContent.classList.remove("modal__content--show");
    }
  }
});

mapOverlay.addEventListener("click", function () {
  mapModal.classList.remove("modal__show");
  mapContent.classList.remove("modal__content--show");
})
