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

const maxWidthOfParent = parentBlock.offsetWidth - childBlock.offsetWidth
const maxHeightOfParent = parentBlock.offsetHeight - childBlock.offsetHeight

let cntX = 0;
let cntY = 0;
const movementOfChildBlock = () => {
    if(cntX < maxWidthOfParent && cntY <= 0){
        cntX++
        childBlock.style.left = `${cntX}px`

        requestAnimationFrame(movementOfChildBlock)
    } else if(cntY <= maxHeightOfParent && cntX >= maxWidthOfParent){
        cntY++
        childBlock.style.top = `${cntY}px`
        requestAnimationFrame(movementOfChildBlock)
    } else if(cntY > maxHeightOfParent && cntX > 0){
        cntX--
        childBlock.style.left = `${cntX}px`
        requestAnimationFrame(movementOfChildBlock)
    } else if (cntX >= 0 && cntY > 0 ){
        cntY--
        childBlock.style.top = `${cntY}px`
        requestAnimationFrame(movementOfChildBlock)
    }

}

movementOfChildBlock()
const cnt = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let interval;
let counter = 0;

start.onclick = () => {
    if (!interval) {
        interval = setInterval(() => {
            counter += 1;
            cnt.innerHTML = counter;
        }, 1000);
    }
};

stop.onclick = () => {
    clearInterval(interval);
    interval = null;
};

reset.onclick = () => {
    counter = 0;
    cnt.innerHTML = counter;
    clearInterval(interval);
    interval = null;
};
