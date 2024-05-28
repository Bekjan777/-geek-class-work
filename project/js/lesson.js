//PHONE CHECKER

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}


// lesson3 - tab slider

const tabContentBlock = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")
const hideTabContent = () => {
    tabContentBlock.forEach((item) => {
        item.style.display = "none"
    })
    tabContentItems.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}


const showTabContent = (index = 0) => {
    tabContentBlock[index].style.display = "block"
    tabContentItems[index].classList.add("tab_content_item_active")
}

hideTabContent()
showTabContent()
let count = 1;
tabsParent.onclick = (e) => {
    if (e.target.classList.contains("tab_content_item")) {
        tabContentItems.forEach((item, index) => {
            // console.log(item, index)

            if (e.target === item) {
                hideTabContent()
                showTabContent(index)
                count = index
            }
        })
    }
}

// let count = 0;
const interval = setInterval(() => {

    if (count < tabContentItems.length - 1) {
        hideTabContent()
        showTabContent(count)
        // console.log(1)
        count++
    } else if (count === tabContentItems.length - 1) {
        hideTabContent()
        showTabContent(count)
        count = 0
        // console.log(2)
    }

}, 3000)

// convertar

const usdInput = document.querySelector("#usd")
const somInput = document.querySelector("#som")
const euroInput = document.querySelector("#eur")
// const converter = document.querySelector(".inner_converter")


//
// somInput.oninput = () => {
//     console.log(1)
//     const request = new XMLHttpRequest
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
//
// usdInput.oninput = () => {
//     console.log(1)
//     const request = new XMLHttpRequest
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }
//
const converter = (element, targetElement, secondTargetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if(element.id === "som"){
                targetElement.value = (element.value / data.usd).toFixed(2)
                secondTargetElement.value = (element.value / data.euro).toFixed(2)
            }
            if(element.id === "usd"){
                targetElement.value = (element.value * data.usd).toFixed(2)
                secondTargetElement.value = (targetElement.value / data.euro).toFixed(2)
            }
            if(element.id === "eur"){
                targetElement.value = (element.value * data.euro).toFixed(2)
                secondTargetElement.value = (targetElement.value / data.usd).toFixed(2)
            }
            if(!element.value){
                targetElement.value = ""
                secondTargetElement.value = ""
            }

        }
    }
}
converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)

// CARD SWITCHER
// hw6 - part 1
let cardID = 1
const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
const parentSwitcher = document.querySelector(".inner_card_switcher")
const toFetch = (cardID) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardID}`)
        .then(response => response.json())
        .then(data => {
            const {id, title, completed} = data
            card.style.borderColor = completed ? "green": "red"
            card.innerHTML = `
            <p>${title}</p>
            <p style="color: ${completed ? "green": "red"}">${completed}</p>
            <span>${cardID}</span>
            `
        })
}

toFetch(1)


parentSwitcher.onclick = (e) => {
    if(e.target === btnNext){
        cardID < 200 ? cardID++ : cardID = 1
        toFetch(cardID)
    }
    if(e.target === btnPrev){
        cardID > 1 ? cardID-- : cardID = 200
        toFetch(cardID)
    }
}

// part 2 of hw6

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(data => console.log(data))

//WEATHER

const citySearchInput = document.querySelector(".cityName")
const btnSearch = document.querySelector("#search")
const cityName = document.querySelector(".city")
const cityTemp = document.querySelector(".temp")
const weatherBlock = document.querySelector(".weather_block")
const iconWeather = document.querySelector(".icon_weather")
const defaultIcon = "https://openweathermap.org/img/wn/02d.png"
const URL = "http://api.openweathermap.org/data/2.5/weather"
const API_KEY = "e417df62e04d3b1b111abeab19cea714"

const citySearch = () =>{
    citySearchInput.oninput = (event) => {
        fetch(`${URL}?q=${event.target.value}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                cityName.innerHTML = data.name || "City is not defined"
                cityTemp.innerHTML = data?.main?.temp ? Math.round(data.main?.temp - 273) + "&deg" : "///"
                iconWeather.src = data?.weather ? `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png` : defaultIcon
            })
    }
}
citySearch()