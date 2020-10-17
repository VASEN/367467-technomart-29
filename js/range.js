const priceFieldset = document.querySelector(".filter-section__price");

let priceRange = priceFieldset.querySelector(".price-range__range");

let priceMinPointer = priceFieldset.querySelector(".price-range__range--min");
let priceMaxPointer = priceFieldset.querySelector(".price-range__range--max");

let priceMinInput = priceFieldset.querySelector("#min-price");

let priceClientCoords = priceRange.getBoundingClientRect(); // координаты полоски диапазона
let priceCoords = {};

// console.log(priceClientCoords);
// console.log(scrollY);
// console.log(scrollX);

// priceCoords.y = priceClientCoords.top + scrollY; // координата полоски Х с учетом прокрутки
// // console.log(priceCoords.top);
// priceCoords.x = priceClientCoords.left + scrollX; // координата полоски Y с учетом прокрутки
// // console.log(priceCoords.left);

let startCoords = {};
startCoords.x = priceClientCoords.left + scrollX;
startCoords.y = priceClientCoords.top + scrollY;

let endCoords = {};
endCoords.x = startCoords.x + priceClientCoords.width;
endCoords.y = startCoords.y;

console.log(startCoords);
console.log(endCoords);

let isMouseDown = false;

let priceMinPointerCoords = "";
let priceMinPointerStartCoords = {};

let minShift = "";

priceMinPointer.addEventListener("mousedown", function (evt) {
  priceMinPointer.focus()
  isMouseDown = true;

  priceMinPointerCoords = priceMinPointer.getBoundingClientRect();
  console.log("EVT.X => " + evt.x);
  minShift = priceMinPointerCoords.width / 2;
  console.log("SHIFT => " + minShift);



  // let priceMinPointerStartCoords = {};

  // priceMinPointerStartCoords.y = priceMinPointerCoords.top + scrollY; // координата ползунка Х с учетом прокрутки
  // console.log(priceMinPointerCoords.top);
  // priceMinPointerStartCoords.x = priceMinPointerCoords.left + scrollX; // координата ползунка Y с учетом прокрутки
  // console.log(priceMinPointerCoords.left);
});

priceRange.addEventListener("mousemove", function (evt) {
  if (isMouseDown === true) {
    // debugger;
    let newX = "";
    newX = evt.x;
    console.log(priceClientCoords.x + "=>" + newX);
    // if (newX < 0) {
    //   newX = startCoords.x;
    // }
    // if (newX > priceClientCoords.width) {
    //   newX = endCoords.x;
    // }
    let valueMin = newX - priceClientCoords.x;
    priceMinPointer.style.left = (newX - priceClientCoords.x) + "px";
    priceMinInput.value = valueMin;
    console.log(priceMinPointer.style.left);
  }
});

priceMinPointer.addEventListener("mouseup", function (evt){
  // debugger;
  isMouseDown = false;
  priceRange.removeEventListener("mousemove", function (evt) {

  });
})



function newPosition (startX, startY, endX) {

}

// priceMinPointer.addEventListener("mousedown", function (evt) {
//   priceMinPointer.focus();
//   priceMinPointer.addEventListener("dragstart", function () {}, false);
//   let priceMinPointerClientCoords = priceMinPointer.getBoundingClientRect();
//   let priceMinPointerCoords = {};
//
//   priceMinPointerCoords.top = priceMinPointerClientCoords.top + scrollY;
//   console.log(priceMinPointerCoords.top);
//   priceMinPointerCoords.left = priceMinPointerClientCoords.left + scrollX;
//   console.log(priceMinPointerCoords.left);
//
//   debugger;
//   let right = priceRange.offsetWidth - priceMinPointer.offsetWidth;
//   console.log(right);
//
//   // debugger;
//   let shiftX = evt.pageX - priceMinPointerCoords.left;
//
//   document.addEventListener("mousemove", function (evt) {
//     let newLeft = evt.pageX - priceMinPointerCoords.left - shiftX;
//     if (newLeft < 0) newLeft = 0;
//     if (newLeft > right) newLeft = right;
//     priceMinPointer.style.left = newLeft + "px";
//     let result = Math.round(newLeft / right * 100);
//     priceMinInput.innerHTML = result.toString();
//   });
// }, false);
//
// document.addEventListener("mouseup", function () {
//   document.removeEventListener("mousemove", function () {});
//   document.removeEventListener("mouseup", function () {});
//   // document.onmousemove = document.onmouseup = null;
// });


