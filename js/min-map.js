const mapOpen=document.querySelector(".about-us__mini-map"),mapModal=document.querySelector(".modal-map"),mapClose=mapModal.querySelector(".modal__button--close"),mapOverlay=mapModal.querySelector(".modal__overlay"),mapContent=mapModal.querySelector(".modal__content");mapOpen.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.add("modal__show"),mapContent.classList.add("modal__content--show"),console.log(mapContent)}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.remove("modal__show"),mapContent.classList.remove("modal__content--show")}),window.addEventListener("keydown",function(e){"Escape"!==e.code&&27!=e.key||mapModal.classList.contains("modal__show")&&(e.preventDefault(),mapModal.classList.remove("modal__show"),mapContent.classList.remove("modal__content--show"))}),mapOverlay.addEventListener("click",function(){mapModal.classList.remove("modal__show"),mapContent.classList.remove("modal__content--show")});
