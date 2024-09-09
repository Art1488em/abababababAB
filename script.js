

const obj1 = {
    name: 'AVAVAVA' ,
    surname: 'Asss' , 
    age: 52, 
    adress: 'Tashkent'
}

const product1 = {
    img: 'https://roe.ru/upload/resize_cache/iblock/960/2743_1435_1e3cd68611aa859771f9d287689e58ce0/960be44a74c166a0cfa87d7d6e8de8fd.jpg', 
    title: 'сумка для мужчин',
    rate: 5.0, 
    rewies: 52,
    oldPrice: 1750000,
    newPrice: 1749999,
    description: 'Хорошо стреляет, от деда достался'
}

const product2 = {
    img: 'https://roe.ru/upload/resize_cache/iblock/960/2743_1435_1e3cd68611aa859771f9d287689e58ce0/960be44a74c166a0cfa87d7d6e8de8fd.jpg', 
    title: 'дильдо',
    rate: 4.9, 
    rewies: 26652,
    oldPrice: 1150000,
    newPrice: 2000000,
    description: 'Хорошо стреляет, от деда достался'
}

const product3 = {
    img: 'https://roe.ru/upload/resize_cache/iblock/960/2743_1435_1e3cd68611aa859771f9d287689e58ce0/960be44a74c166a0cfa87d7d6e8de8fd.jpg', 
    title: 'пельмени',
    rate: 0, 
    rewies: 1,
    oldPrice: 150000,
    newPrice: 19999,
    description: 'Хорошо стреляет, от деда достался'
}

product3.rate = 4.8
product3.newPrice = 2000
product3.oldPrice = 1007

product3.stock = 52 + 'товаров'

delete product3.oldPrice

console.log(product1['title'], product1['newPrice']);
console.log(product2['title'], product2['newPrice']);
console.log(product3['title'],  product3['newPrice'], product3['rate'], product3['stock'],);



const cardImg = document.querySelector('.card img').src = product1.img
const cardTitle = document.querySelector('.card h3').innerText = product1.title
const cardRate = document.querySelector('#rating').innerText = product1.rate
const cardRewiews = document.querySelector('#rewiews').innerText = product1.rewies
const cardOldPrice = document.querySelector('.card s').innerText = product1.oldPrice
const cardNewPrice = document.querySelector('.card b').innerText = product1.newPrice 


