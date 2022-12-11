let cheeseBtn = document.getElementById('cheese')
let meatBtn = document.getElementById('meat')
let onionBtn = document.getElementById('onion')
let saladBtn = document.getElementById('salad')
let tomatoBtn = document.getElementById('tomato')
let pickleBtn = document.getElementById('pickle')
let orderBtn = document.getElementById('order')
let clearBtn = document.getElementById('clear')
let total = document.getElementById('price')

let price = 2
cheeseBtn.addEventListener('click', function () {
    let add = document.createElement('img')
    add.src = "./burger-layers/cheese.svg";
    add.style.margin = '-55px 0'
    price +=2
    total.innerHTML = price

    document.querySelector("#burger").appendChild(add);
})
meatBtn.addEventListener('click', function () {
    let add = document.createElement('img')
    add.src = "./burger-layers/meat.svg";
    add.style.margin = "-40px 0";
    price +=5
    total.innerHTML = price

    document.querySelector("#burger").appendChild(add);
})
onionBtn.addEventListener('click', function () {
    let add = document.createElement('img')
    add.src = "./burger-layers/onion.svg";
    add.style.margin = "-55px 0";
    price +=1
    total.innerHTML = price

    document.querySelector("#burger").appendChild(add);
})
saladBtn.addEventListener('click', function () {
    let add = document.createElement('img')
    add.src = "./burger-layers/salad.svg";
    price +=1
    total.innerHTML = price

    document.querySelector("#burger").appendChild(add);
})
tomatoBtn.addEventListener('click', function () {
    let add = document.createElement('img')
    add.src = "./burger-layers/tomato.svg";
    add.style.margin = '-50px 0'
    price +=2
    total.innerHTML = price

    document.querySelector("#burger").appendChild(add);
})
pickleBtn.addEventListener('click', function () {
    let add = document.createElement('img')
    add.src = "./burger-layers/pickle.svg";
    add.style.margin = '-50px 0'
    price +=3
    total.innerHTML = price

    document.querySelector("#burger").appendChild(add);
})
orderBtn.addEventListener('click', function () {
    let orderNumber = Math.floor(Math.random()*25)+10
    alert(`Your order number is ${orderNumber}.`);
})
clearBtn.addEventListener('click', function () {
    let images = document.querySelectorAll('#burger img')  
    for(let i = 0; i <= images.length; i++){
        console.log(images[i]);
        images[i].remove()
        price = 2
        total.innerHTML = price
    }
})