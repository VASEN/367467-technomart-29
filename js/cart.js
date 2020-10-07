var buyButton = document.querySelectorAll(".goods__button_buy");
var cartForm = document.querySelector(".modal-cart");
var cartClose = cartForm.querySelector(".modal__button_close");

buyButton.forEach(function (item) {
  item.addEventListener("click", function () {
    cartForm.classList.add("modal__show");
  })
});

cartClose.addEventListener("click", function () {
  cartForm.classList.remove("modal__show");
});
