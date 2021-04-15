function computerPlay(){
    const element = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * element.length);
    return element[randomNumber];
}

const element = computerPlay();
console.log(element);