const feedbackOpen=document.querySelector(".about-us__button_contacts"),feedbackModal=document.querySelector(".modal-feedback"),feedbackClose=feedbackModal.querySelector(".modal__button--close"),feedbackContent=feedbackModal.querySelector(".modal__content"),overlay=feedbackModal.querySelector(".modal__overlay"),feedbackForm=feedbackModal.querySelector("form"),feedbackName=feedbackModal.querySelector("[name=feedback__name]"),feedbackEmail=feedbackModal.querySelector("[name=feedback__email]"),feedbackText=feedbackModal.querySelector("[name=feedback__text]");let storage=!0,storageName="";try{localStorage.getItem("name")&&(storageName=localStorage.getItem("name"))}catch(e){storage=!1}feedbackOpen.addEventListener("click",function(e){e.preventDefault(),feedbackModal.classList.add("modal__show"),storageName?(console.log(storageName),feedbackName.value=storageName,feedbackEmail.focus()):feedbackName.focus()}),feedbackForm.addEventListener("submit",function(e){e.preventDefault(),feedbackName.value&&feedbackEmail.value&&feedbackText.value?storage&&(localStorage.setItem("name",feedbackName.value),feedbackModal.classList.remove("modal__show")):(feedbackContent.classList.remove("modal__shake"),feedbackContent.offsetWidth=feedbackContent.offsetWidth,feedbackContent.classList.add("modal__shake"))}),feedbackClose.addEventListener("click",function(){feedbackModal.classList.remove("modal__show"),feedbackContent.classList.remove("modal__shake")}),window.addEventListener("keydown",function(e){"Escape"!==e.code&&27!=e.key||feedbackModal.classList.contains("modal__show")&&(e.preventDefault(),feedbackModal.classList.remove("modal__show"),feedbackContent.classList.remove("modal__shake"))}),overlay.addEventListener("click",function(){feedbackModal.classList.remove("modal__show")});
