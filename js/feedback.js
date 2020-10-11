let feedbackOpen = document.querySelector(".about-us__button_contacts");
let feedbackForm = document.querySelector(".modal-feedback");
let feedbackClose = feedbackForm.querySelector(".modal__button--close");

let feedbackName = feedbackForm.querySelector("[name=feedback__name]");


feedbackOpen.addEventListener("click", function () {
  feedbackForm.classList.add("modal__show");
  feedbackName.focus();
});

feedbackForm.addEventListener("keydown", function (evt){
  evt.preventDefault();
  if (evt.code === "Escape" || evt.code === 27) {
    feedbackForm.classList.remove("modal__show");
  }
});


feedbackClose.addEventListener("click", function () {
  feedbackForm.classList.remove("modal__show");
});


