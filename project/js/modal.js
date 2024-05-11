//MODAL
const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector("#btn-get")
const modalCloseBtn = document.querySelector(".modal_close")
const openModal = () =>{
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}


const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}

modal.onclick = (event) => event.target === modal && closeModal()

modalTrigger.onclick = openModal

modalCloseBtn.onclick = closeModal