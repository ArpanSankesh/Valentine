let img = document.querySelector('img');
let yesBtn = document.querySelector('#yes')
let noBtn = document.querySelector('#no')
let txt = document.querySelector('.question h1')
let buttons = document.querySelector('.button-div')

let images = [
    "assets/SadPikachu1.jpg",
    "assets/SadPikachu2.jpg",
    "assets/SadPikachu3.jpg",
    "assets/SadPikachu4.jpg",
    "assets/SadPikachu5.jpg",
];
const messages = ["really?", "pookie please", "are you sure?", "Last chance!", "Think again"];
const yesMessages = ["Come On", "Say Yes", "SAYY YESS" , "SAYYY YESSS", "SAYYYY YESSSS"];


let index = 0 
let scaleFactor = 1
let changeImg = () => {
    
    img.src = images[index]
    index = (index + 1) % images.length

    noBtn.innerHTML = `${messages[index]}`
    yesBtn.innerHTML = `${yesMessages[index]}`
    index = (index + 1) % images.length

    scaleFactor += 0.2
    yesBtn.style.transform = `scale(${scaleFactor})`;
    console.log(scaleFactor);
    
}

let congrats = () => {
    buttons.style.display = 'none'
    txt.innerHTML = "Pika Pika! You made Pikachu happy! 💖"
    img.src = 'assets/happyPika.webp'
}

noBtn.addEventListener('click', changeImg)
yesBtn.addEventListener('click', congrats)

