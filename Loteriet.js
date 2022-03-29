var Total_Clicks = 0;
const RANDOM_CHANCE = 0.05

var gamba = document.getElementsByClassName('gamba')
 
for (let i = 0; i < gamba.length; i++){
    const element = gamba[i];
    element.addEventListener('click', flip)
}

function flip(e){
    if ((Total_Clicks < 3) && (e.path[0].src == 'http://127.0.0.1:5500/Images/kew.jpg')){
        Total_Clicks++;
        img = e.path[0]
        Math.random() > RANDOM_CHANCE ? img.src = "images/L.jpg" : img.src = 'images/W.png';
    }else {
        console.log('out of clicks')
    }
    
}

console.log('Ikke Test')