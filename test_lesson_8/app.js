const extractNumbers = (s) => {
    const m = s.match(/\d/g)
    return m ? m.map(Number) : []
}

console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]
//2

const rec = (a = 0, b = 1) => {
    if (a > 144) return
    console.log(a)
    setTimeout(() => rec(b, a + b), 1000)
}

rec()

//3

const toget = async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        data.forEach(item => {
            console.log(item.title)
        })
    }catch (error){
        console.error('error')
    }
}
toget()

//4

const btns = document.querySelectorAll("button")
const div = document.querySelector('div')
div.onclick = (e) =>{
    if(e.target.innerHTML === 'red'){
        document.body.style.backgroundColor = 'red'
    }
    if(e.target.innerHTML === 'green'){
        document.body.style.backgroundColor = 'green'
    }
    if(e.target.innerHTML === 'blue'){
        document.body.style.backgroundColor = 'blue'
    }
    if(e.target.innerHTML === 'yellow'){
        document.body.style.backgroundColor = 'yellow'
    }
    if(e.target.innerHTML === 'purple'){
        document.body.style.backgroundColor = 'purple'
    }
}
//5

const a_ = document.querySelector('a')
const block = document.querySelector(".block")

let is = true
a_.onclick = () => {
    if(is){
        block.style.display = 'none'
        is=false
    }else{
        block.style.display = 'block'
        is=true
    }

}

//6

const num = document.querySelector('.num')
let cnt = 0
const inter = setInterval(()=>{
    if(cnt<100){
        cnt++
        num.innerHTML = cnt
    }else{
        clearInterval(inter)
    }
},1)

//7

const get = document.querySelector(".good")
get.onclick = async ()=>{
    try{
        const response = await fetch('./text.json')
        const data = await response.json()
        console.log(data)
    }catch (error){
        console.error('error')
    }
}
