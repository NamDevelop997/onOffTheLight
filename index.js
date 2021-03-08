function getEle(id) {
    return document.getElementById(id);
}

function turnOn(){
    let turnOn = getEle("light");
    
    turnOn.src= "/img/on.png";
}

function turnOff(){
    let turnOff = getEle("light");
    turnOff.src= "/img/off.png";
}