let img = document.querySelector('img');
let yesBtn = document.querySelector('#yes')
let noBtn = document.querySelector('#no')

let images = [
    "assets/SadPikachu1.webp",
    "assets/SadPikachu2.webp",
    "assets/SadPikachu3.webp",
    "assets/SadPikachu4.webp",
    "assets/SadPikachu5.webp",
    "assets/SadPikachu6.webp"
];

let index = 0 
let changeImg = () => {
    console.log("changed");
    
    img.src = [images]
    images = (index + 1 ) % images.length
}

noBtn.addEventListener('click', changeImg)