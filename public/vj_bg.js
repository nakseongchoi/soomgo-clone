const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `vj_image/${imgNumber + 1}.jpg`;
    image.addEventListener("loadend", handleImgLoad());
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number ;
}

function init(){
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}

init();