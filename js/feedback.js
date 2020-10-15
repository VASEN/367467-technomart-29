const feedbackOpen = document.querySelector(".about-us__button_contacts");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal__button--close");
const feedbackContent = feedbackModal.querySelector(".modal__content");
const overlay = feedbackModal.querySelector(".modal__overlay");

const feedbackForm = feedbackModal.querySelector("form");
const feedbackName = feedbackModal.querySelector("[name=feedback__name]");
const feedbackEmail = feedbackModal.querySelector("[name=feedback__email]");
const feedbackText = feedbackModal.querySelector("[name=feedback__text]");

let storage = true;
let storageName = "";

try {
  if (localStorage.getItem("name")) {
    storageName = localStorage.getItem("name");
  }
} catch (err) {
  storage = false;
}

feedbackOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal__show");
  feedbackContent.classList.add("modal__content--show");
  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  evt. preventDefault();
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    feedbackContent.classList.remove("modal__content--show");
    feedbackContent.classList.remove("modal__shake");
    feedbackContent.offsetWidth = feedbackContent.offsetWidth;
    feedbackContent.classList.add("modal__shake");
  } else {
    if (storage) {
      localStorage.setItem("name", feedbackName.value)
      feedbackModal.classList.remove("modal__show");
    }
  }
});

feedbackClose.addEventListener("click", function () {
  feedbackModal.classList.remove("modal__show");
  feedbackContent.classList.remove("modal__shake");
  feedbackContent.classList.remove("modal__content--show");
});

window.addEventListener("keydown", function (evt){
  if (evt.code === "Escape" || evt.key == 27) {
    if (feedbackModal.classList.contains("modal__show")) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal__show");
      feedbackContent.classList.remove("modal__shake");
      feedbackContent.classList.remove("modal__content--show");
    }
  }
});

overlay.addEventListener("click", function () {
  feedbackModal.classList.remove("modal__show");
  feedbackContent.classList.remove("modal__shake");
  feedbackContent.classList.remove("modal__content--show");
})
