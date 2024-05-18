// 1

const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"))
console.log(containsOnlyDigits("12a45"))


// 2

setInterval(() => {
    console.log("Прошла секунда")
}, 1000)


//3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i)
        if (i >= 10) {
            clearInterval(interval)
        } else {
            i++
        }
    }, 1000);
}
count()

//4
const btn = document.querySelector("button")
const block = document.querySelector(".block")

btn.onclick = () => {
    if (block.classList.contains("non-active")) {
        block.classList.remove("non-active")
        block.classList.add("is-active")
    } else {
        block.classList.add("non-active")
        block.classList.remove("is-active")
    }
}


//5

const request = new XMLHttpRequest()
request.open("GET", "list.json")
request.setRequestHeader("Content-type", "application/json")
request.send()

request.onload = () => {
    const dataToLog = JSON.parse(request.response)
    console.log(dataToLog)
    }

