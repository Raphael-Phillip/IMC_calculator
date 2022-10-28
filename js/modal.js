export const Modal = {
    wrapper: document.querySelector(".modalWrapper"),
    buttonClose: document.querySelector(".modal .close"), 
    resultSpan: document.querySelector(".modal .title span"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    },
};


Modal.buttonClose.onclick =  () => {
    Modal.close()
};


window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {

   if(event.Key === "Escape") {
    Modal.close()
    }
    
};
