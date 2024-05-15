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

setTimeout(openModal, 10000)

const toCheckIfItIsMaxOrNot = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
    if (scrollTop + viewportHeight >= documentHeight) {
        openModal()
        window.removeEventListener("scroll", toCheckIfItIsMaxOrNot)
    }
}
window.addEventListener('scroll', toCheckIfItIsMaxOrNot);
