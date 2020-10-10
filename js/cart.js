let buyButton = document.querySelectorAll(".goods__button--buy");
let cartForm = document.querySelector(".modal-cart");
let cartClose = cartForm.querySelector(".modal__button--close");

buyButton.forEach(function (item) {
  item.addEventListener("click", function () {
    cartForm.classList.add("modal__show");
  })
});

cartClose.addEventListener("click", function () {
  cartForm.classList.remove("modal__show");
});
