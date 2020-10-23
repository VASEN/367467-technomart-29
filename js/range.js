const priceFieldset = document.querySelector(".filter-section__price");

// Координаты диапазона цены
let priceRange = priceFieldset.querySelector(".price-range__range");
let priceRangeCoords = getCoords(priceRange);
// console.log("PRICE_RANGE");
// console.log(priceRangeCoords);

// Координаты выбранного текущего диапазона
let currentRange = priceFieldset.querySelector(".price-range__range--current");
let currentRangeCoords = getCoords(currentRange);
// console.log("CURRENT_RANGE");
// console.log(currentRangeCoords.width);

// Полхунок с минимальной ценой
let priceMinPointer = priceFieldset.querySelector(".price-range__range--min"); //ползунок min
let priceMinPointerCoords = "";

// Ползунок с максимальной ценой
let priceMaxPointer = priceFieldset.querySelector(".price-range__range--max"); //ползунок max
let priceMaxPointerCoords = "";

// Переменные ограничивающие диапазон цен
let minPrice = "";
let maxPrice = "";
let priceMinInput = priceFieldset.querySelector("#min-price");
let priceMaxInput = priceFieldset.querySelector("#max-price");

function getMinMax (min= 0, max = 10000) {
  minPrice = min;
  maxPrice = max;
  getPointerStep();
  priceMinInput.value = minPrice;
  priceMaxInput.value = Math.floor(currentRangeCoords.width / pointerStep);
}

// Шаг диапазона
let pointerStep = "";

function getPointerStep() {
  pointerStep = (priceRangeCoords.endX - priceRangeCoords.startX) / (maxPrice - minPrice);
  // console.log("STEP => " + pointerStep);
}

// Маркер нажатия мыши
let isMinDown = false;
let isMaxDown = false;

// Переменные
let positionMinX = ""; //
let positionMaxX = "";
let minShift = ""; // сдвиг при нажатии на ползунок MIN
let maxShift = "";
let valueMin = 0;
let valueMax = 0;


//
if (priceFieldset) {
  getMinMax();
  priceMinPointer.style.left = (priceMinPointer.style.left - 10) + "px";
  priceMaxPointer.style.left = (currentRangeCoords.width - 10) + "px";
}


priceMinPointer.addEventListener("mousedown", function (evt) {
  isMinDown = true;
  minShift = evt.offsetX ; // CLIENT.X => Координата Х, переданная при нажатии мышки
  // console.log("minShift => " + minShift);
});

priceMinPointer.addEventListener("mousemove", function (evt) {
  if (isMinDown === true) {

    currentRangeCoords = getCoords(currentRange);
    // console.log("currentRangeCoords");
    // console.log(currentRangeCoords);

    priceMinPointerCoords = getCoords(priceMinPointer);
    // console.log("priceMinPointerCoords")
    // console.log(priceMinPointerCoords);

    positionMinX = evt.clientX - priceRangeCoords.startX - minShift;
    if (positionMinX <= -10) {
      priceMinPointer.style.left = "-10px";
      priceMinInput.value = 0;
    }
    else {
      valueMin += evt.movementX;
      priceMinPointer.style.left = valueMin - 10 + "px";
      // console.log("VALUE_MIN => " + valueMin);
      priceMinInput.value = Math.floor(valueMin / pointerStep);
      currentRange.style.width = currentRangeCoords.width - evt.movementX + "px";
      // console.log(currentRange.style.width);
      // console.log(currentRangeCoords.width);
      currentRange.style.marginLeft = (valueMin) + "px";
      }
  }
});

priceMinPointer.addEventListener("mouseup", function (evt){
  isMinDown = false;
});

priceMaxPointer.addEventListener("mousedown", function (evt) {
  isMaxDown = true;
  maxShift = evt.offsetX;
});

priceMaxPointer.addEventListener("mousemove", function (evt) {
  if (isMaxDown) {
    currentRangeCoords = getCoords(currentRange);
    console.log("currentRangeCoords");
    console.log(currentRangeCoords);

    priceMaxPointerCoords = getCoords(priceMaxPointer);
    console.log("priceMinPointerCoords")
    console.log(priceMaxPointerCoords);

    positionMaxX = evt.clientX - priceRangeCoords.startX - maxShift - 10;
    if (positionMaxX >= 160) {
      priceMaxInput.value = 10000;
      priceMaxPointer.style.left = "170px";
    } else {
      valueMax = currentRangeCoords.endX - priceRangeCoords.startX + evt.movementX;
      priceMaxPointer.style.left = valueMax - 10 + "px";
      currentRange.style.width = currentRangeCoords.width + evt.movementX + "px";
      priceMaxInput.value = Math.floor(valueMax / pointerStep);
    }
  }
});

priceMaxPointer.addEventListener("mouseup", function (evt) {
  isMaxDown = false;
  // console.log("Длина при отжатии MAX => " + currentRange.style.width);
  // currentRangeCoords = getCoords(currentRange);
});



priceMinInput.addEventListener("input", function (evt) {
  currentRangeCoords = getCoords(currentRange);
  let x = parseInt(priceMinInput.value);
  let y = parseInt(priceMaxInput.value);
  if ( x >= 0 && x < y) {
    currentRange.style.width = currentRangeCoords.width - Math.round(x * pointerStep) + "px";
    currentRange.style.marginLeft = Math.round(x * pointerStep) + "px";
    priceMinPointer.style.left = Math.round(x * pointerStep) - 10 + "px";
  } else if (x > y) {
    x = y;
    priceMinInput.value = y;
    currentRange.style.width = currentRangeCoords.width - Math.round(x * pointerStep) + "px";
    currentRange.style.marginLeft = Math.round(x * pointerStep) + "px";
    priceMinPointer.style.left = Math.round(x * pointerStep) - 10 + "px";
  }
});

priceMaxInput.addEventListener("input", function (evt) {
  currentRangeCoords = getCoords(currentRange);
  let x = parseInt(priceMinInput.value);
  let y = parseInt(priceMaxInput.value);

  // console.log(Math.round(y * pointerStep));
  // console.log(Math.round(x * pointerStep));
  if (y >= maxPrice) {
    y = maxPrice;
    priceMaxInput.value = maxPrice;
    currentRange.style.width = Math.round(y * pointerStep) - Math.round(x * pointerStep) + "px";
    priceMaxPointer.style.left = Math.round(y * pointerStep) - 10 + "px";
  } else {
    currentRange.style.width = Math.round(y * pointerStep) - Math.round(x * pointerStep) + "px";
    priceMaxPointer.style.left = Math.round(y * pointerStep) - 10 + "px";
  }
});

function getCoords(element) {
  let coords = element.getBoundingClientRect();
  let allCoords = {};
  allCoords.startX = coords.left + scrollX;
  allCoords.startY = coords.top + scrollY;
  allCoords.endX = coords.left + scrollX + coords.width;
  allCoords.endY = allCoords.startY;
  allCoords.width = coords.width;
  return allCoords;
}
