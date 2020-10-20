const priceFieldset = document.querySelector(".filter-section__price");

let priceRange = priceFieldset.querySelector(".price-range__range");
let priceRangeCoords = priceRange.getBoundingClientRect(); // координаты полоски диапазона
let startRangeCoords = {};
startRangeCoords.startX = priceRangeCoords.left + scrollX;
startRangeCoords.startY = priceRangeCoords.top + scrollY;

let endRangeCoords = {};
endRangeCoords.endX = startRangeCoords.startX + priceRangeCoords.width;
endRangeCoords.endY = startRangeCoords.startY;

console.log(startRangeCoords);
console.log(endRangeCoords);

let currentRange = priceFieldset.querySelector(".price-range__range--current");
let currentRangeCoords = currentRange.getBoundingClientRect();
let startCurrentCoords = {};
startCurrentCoords.startX = currentRangeCoords.left + scrollX;
startCurrentCoords.startY = currentRangeCoords.top + scrollY;

let endCurrentCoords = {};
endCurrentCoords.endX = startCurrentCoords.startX + currentRangeCoords.width;
endCurrentCoords.endY = startCurrentCoords.startY;


let priceMinPointer = priceFieldset.querySelector(".price-range__range--min"); //ползунок min
let priceMinPointerCoords = "";
let priceMinPointerStartCoords = {};


let priceMaxPointer = priceFieldset.querySelector(".price-range__range--max"); //ползунок max
let priceMaxPointerCoords = "";
let priceMaxPointerStartCoords = {};


const minPrice = 0;
const maxPrice = 100000;
let pointerStep = (endRangeCoords.endX - startRangeCoords.startX) / (maxPrice - minPrice);
console.log(pointerStep);

let priceMinInput = priceFieldset.querySelector("#min-price");
priceMinInput.value = Math.floor((startCurrentCoords.startX - startRangeCoords.startX) / pointerStep);

let priceMaxInput = priceFieldset.querySelector("#max-price");
priceMaxInput.value = Math.floor((endCurrentCoords.endX - startRangeCoords.startX) / pointerStep);


let isMouseDown = false;
let isMinPointer = false;
let isMaxPointer = false;

let minShift = ""; // сдвиг при нажатии на ползунок
let maxShift = "";

let newX = "";
let positionX = "";

priceMinPointer.addEventListener("mousedown", function (evt) {
  priceMinPointer.focus()
  isMouseDown = true;
  isMinPointer = true;

  priceMinPointerCoords = priceMinPointer.getBoundingClientRect();
  priceMinPointerStartCoords.startX = priceMinPointerCoords.left;
  priceMinPointerStartCoords.endX = priceMinPointerCoords.left + priceMinPointerCoords.width;
  console.log("START_MIN_X => " + priceMinPointerStartCoords.startX);
  console.log("END_MIN_X => " + priceMinPointerStartCoords.endX);
// console.log("EVT.X => " + evt.x);
  minShift = evt.x - priceMinPointerStartCoords.startX;
  console.log("SHIFT => " + minShift);
});

priceMaxPointer.addEventListener("mousedown", function (evt) {
  priceMaxPointer.focus();
  isMouseDown = true;
  isMaxPointer = true;

  priceMaxPointerCoords = priceMaxPointer.getBoundingClientRect();
  priceMaxPointerStartCoords.startX = priceMaxPointerCoords.left;
  priceMaxPointerStartCoords.endX = priceMaxPointerCoords.left + priceMaxPointerCoords.width;
  console.log("START_MAX_X => " + priceMaxPointerStartCoords.startX);
  console.log("END_MAX_X => " + priceMaxPointerStartCoords.endX);

  maxShift = evt.x - priceMaxPointerStartCoords.startX;
  console.log("SHIFT => " + maxShift);
});

priceMinPointer.addEventListener("mousemove", function (evt) {
  if (isMouseDown === true || isMinPointer === true) {
    newX = evt.x;

    // console.log(priceRangeCoords.x + "=>" + newX);
    positionX = newX - startRangeCoords.startX - minShift;
    // debugger;
    let valueMin = "";
    if (positionX <= 0) {
      newX = startRangeCoords.startX;
      priceMinPointer.style.left = "0";
      priceMinInput.value = 0;
      // debugger;
    } else if (positionX >= (currentRangeCoords.width - priceMaxPointerCoords.width - priceMinPointerCoords.width)) {
      priceMinPointer.style.left = (currentRangeCoords.width - priceMaxPointerCoords.width - priceMinPointerCoords.width) + "px";
      valueMin = positionX;
      priceMinInput.value = Math.floor(valueMin / pointerStep);
    } else {
      valueMin = positionX;
        priceMinPointer.style.left = (valueMin) + "px";
        priceMinInput.value = Math.floor(valueMin / pointerStep);
      }
    // debugger;
    console.log(priceMinPointer.style.left);
  }
});

priceMaxPointer.addEventListener("mousemove", function (evt) {
  if (isMouseDown === true || isMaxPointer === true) {
    let maxValue = "";
    newX = evt.x;
    positionX = newX - currentRangeCoords.width - maxShift;
    maxValue = positionX;
    // debugger;
    priceMaxPointer.style.left = maxValue + "px";
  }
});

priceMinPointer.addEventListener("mouseup", function (evt){
  // debugger;
  isMouseDown = false;
  isMinPointer = false;

  priceMinPointer.removeEventListener("mousemove", function (evt) {});
  priceMinPointer.removeEventListener("mousedown", function (evt) {});
});

priceMaxPointer.addEventListener("mouseup", function (evt) {
  isMouseDown = false;
  isMaxPointer = false;

  priceMaxPointer.removeEventListener("mousemove", function (evt) {});
  priceMaxPointer.removeEventListener("mousedown", function (evt) {});
});
