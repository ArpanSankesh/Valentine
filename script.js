let img = document.querySelector('img');
let yesBtn = document.querySelector('#yes')
let noBtn = document.querySelector('#no')
let txt = document.querySelector('.question h1')
let buttons = document.querySelector('.button-div')

let images = [
    "assets/bat2.jpg",
    "assets/bat3.jpg",
    "assets/bat4.jpg",
    "assets/bat5.jpg",
    "assets/bat6.jpg",
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
    txt.innerHTML = "Yeahhhhh I know you would say yes! 💖"
    img.src = 'assets/batHappy.jpg'
}

noBtn.addEventListener('click', changeImg)
yesBtn.addEventListener('click', congrats)

