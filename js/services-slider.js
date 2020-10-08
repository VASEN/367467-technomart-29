let services = document.querySelector(".services");
let serviceButtons = services.querySelectorAll(".services-slider__button");
let serviceSliders = services.querySelectorAll(".services-slider__item");

let currentButton = services.querySelector(".services-slider__button--current");
let currentSlide = services.querySelector(".services-slider__item--current");
console.log(currentButton);
console.log(currentSlide);

for (let i = 0; i < serviceButtons.length; i++) {
  serviceButtons[i].addEventListener("click", function () {
    console.log(serviceButtons[i]);
    if (serviceButtons[i].classList.contains("services-slider__button--current")) {
      currentButton = serviceButtons[i];
      currentSlide = serviceSliders[i];
    }
    else {
      currentButton.classList.remove("services-slider__button--current");
      currentSlide.classList.remove("services-slider__item--current");
      serviceButtons[i].classList.add("services-slider__button--current");
      currentButton = serviceButtons[i];
      serviceSliders[i].classList.add("services-slider__item--current");
      currentSlide = serviceSliders[i];
    }
  })
}




