const inputGmail = document.querySelector("#gmail_input")
const resultGmail = document.querySelector("#gmail_result")
const buttonGmail = document.querySelector("#gmail_button")

const regExp = /^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/

buttonGmail.onclick = () => {
    if(regExp.test(inputGmail.value)){
        resultGmail.style.color = "green"
        resultGmail.innerHTML = "Successful"
    }else{
        resultGmail.style.color = "red"
        resultGmail.innerHTML = "Unsuccessful"
    }
}

const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

let cnt = 0;
const movementOfChildBlock = () => {
    cnt++
    childBlock.style.left = `${cnt}px`
    if(cnt<448){
        requestAnimationFrame(movementOfChildBlock)
    }
}

movementOfChildBlock()
