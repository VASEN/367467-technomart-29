const cartOpen = document.querySelectorAll(".goods__button--buy");
const cartModal = document.querySelector(".modal-cart");
const cartClose = cartModal.querySelector(".modal__button--close");
const cartOverlay = cartModal.querySelector(".modal__overlay");


cartOpen.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.add("modal__show");
  })
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt){
  if (evt.code === "Escape" || evt.key == 27) {
    if (cartModal.classList.contains("modal__show")) {
      evt.preventDefault();
      cartModal.classList.remove("modal__show");
    }
  }
});

cartOverlay.addEventListener("click", function () {
  cartModal.classList.remove("modal__show");
})
