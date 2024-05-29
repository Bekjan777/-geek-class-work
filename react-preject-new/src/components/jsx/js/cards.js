const cards = document.querySelector(".cards")

const toMakeCard = (title, body) => {
    cards.innerHTML += `
    <div class="card"> 
        <img src="https://ir.ozone.ru/s3/multimedia-z/c1000/6011728655.jpg" alt="love you">
        <span id="title">
            ${title}
        </span>        
        <span id="body">
            ${body}
        </span>
    </div>
    `
}

const ToGetInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(item => {
            toMakeCard(item.title, item.body)

        })

    }
    catch (error){
        console.error('ERROR')
    }
}
export default ToGetInfo()
//
//
// toGetInfo()