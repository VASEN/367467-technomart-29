const priceFieldset = document.querySelector(".filter-section__price");

let priceRange = priceFieldset.querySelector(".price-range__range");

let priceMinPointer = priceFieldset.querySelector(".price-range__range--min");
let priceMaxPointer = priceFieldset.querySelector(".price-range__range--max");

let priceMinInput = priceFieldset.querySelector("#min-price");

let priceClientCoords = priceRange.getBoundingClientRect(); // координаты полоски диапазона
let priceCoords = {};

console.log(priceClientCoords);
// console.log(scrollY);
// console.log(scrollX);

priceCoords.top = priceClientCoords.top + scrollY;
console.log(priceCoords.top);
priceCoords.left = priceClientCoords.left + scrollX;
console.log(priceCoords.left);

priceMinPointer.addEventListener("mousedown", function (evt) {
  priceMinPointer.focus();
  priceMinPointer.addEventListener("dragstart", function () {}, false);
  let priceMinPointerClientCoords = priceMinPointer.getBoundingClientRect();
  let priceMinPointerCoords = {};

  priceMinPointerCoords.top = priceMinPointerClientCoords.top + scrollY;
  console.log(priceMinPointerCoords.top);
  priceMinPointerCoords.left = priceMinPointerClientCoords.left + scrollX;
  console.log(priceMinPointerCoords.left);

  debugger;
  let right = priceRange.offsetWidth - priceMinPointer.offsetWidth;
  console.log(right);

  // debugger;
  let shiftX = evt.pageX - priceMinPointerCoords.left;

  document.addEventListener("mousemove", function (evt) {
    let newLeft = evt.pageX - priceMinPointerCoords.left - shiftX;
    if (newLeft < 0) newLeft = 0;
    if (newLeft > right) newLeft = right;
    priceMinPointer.style.left = newLeft + "px";
    let result = Math.round(newLeft / right * 100);
    priceMinInput.innerHTML = result.toString();
  });
}, false);

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", function () {});
  document.removeEventListener("mouseup", function () {});
  // document.onmousemove = document.onmouseup = null;s
});


