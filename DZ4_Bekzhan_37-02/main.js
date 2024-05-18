const btn = document.querySelector("#btn")
const persons_ = document.querySelectorAll(".person")
const names = document.querySelectorAll(".name")
const ages = document.querySelectorAll(".age")
const images = document.querySelectorAll(".img")



btn.onclick = () => {
    const data = new XMLHttpRequest();
    data.open("GET", "persons.json");
    data.setRequestHeader("Content-type", "application/json");
    data.send();

    data.onload = () => {
        const data_i = JSON.parse(data.response);
        data_i.forEach((person, index) => {
            if (names[index]) {
                names[index].innerHTML = person.name;
            }
            if (ages[index]) {
                ages[index].innerHTML = person.age;
            }
            if (images[index]) {
                images[index].src = person.img;
            }
        });
    };
};