let index = 0;
let imageArray = [
    "file:///D:/Exercises/javaScript/images/Cat.jpg", "file:///D:/Exercises/javaScript/images/Dog.jpg" ,
    "file:///D:/Exercises/javaScript/images/Aries.jpg", "file:///D:/Exercises/javaScript/images/Taurus.jpg",
    "file:///D:/Exercises/javaScript/images/cock.jpg", "file:///D:/Exercises/javaScript/images/pegion.jpg"
]

var greeting = document.querySelector('#greetingMessage')
greeting.innerHTML = 'Welcome to workBench';

var image = document.getElementById('image');
image.src = imageArray[index];

function next() {
    ++index
    if (imageArray.length > index) {
        image.src = imageArray[index];
    } else {
        index = imageArray.length -1;
        image.src = imageArray[index]
    }
}

function prev() {
    --index 
    if(imageArray.length > index){
        if (index < 0 || index == 0){
            index = imageArray.length -1
            image.src = imageArray[index]
        } else {
            image.src = imageArray[--index]
        }
    } else {
        index = 0;
        image.src = imageArray[index]
    }
}