var feedbackOpen = document.querySelector(".about-us__button_contacts");
var feedbackForm = document.querySelector(".modal-feedback");
var feedbackClose = feedbackForm.querySelector(".modal__button_close");

var feedbackName = feedbackForm.querySelector("[name=feedback__name]");


feedbackOpen.addEventListener("click", function () {
  feedbackForm.classList.add("modal__show");
  feedbackName.focus();
});

// feedbackForm.addEventListener("keydown", function (evt){
//   evt.preventDefault();
//   if (evt.code === 27) {
//     feedbackForm.classList.remove("modal__show");
//   }
// });


feedbackClose.addEventListener("click", function () {
  feedbackForm.classList.remove("modal__show");
});


