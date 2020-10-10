let slider = document.querySelector(".features-slider");

let radioButtons = slider.querySelectorAll("input");

let prevButton = slider.querySelector(".features-slider__button--prev");
let nextButton = slider.querySelector(".features-slider__button--next");

let currentIndex = "";

for (let i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].checked === true) {
    currentIndex = i;
  }
}

prevButton.addEventListener("click", function() {
  if (currentIndex === 0) {
    currentIndex = radioButtons.length - 1;
    radioButtons[currentIndex].checked = true;
  } else {
    radioButtons[currentIndex - 1].checked = true;
    currentIndex--;
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex === (radioButtons.length - 1)) {
    currentIndex = 0;
    radioButtons[currentIndex].checked = true;
  } else {
    currentIndex = currentIndex + 1;
    radioButtons[currentIndex].checked = true;
  }
})
