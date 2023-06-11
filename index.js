
var numberOfButtons = document.querySelectorAll("button").length ; 

for (var i = 0 ; i < numberOfButtons ; i++ ) { 
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (event) { 
        var key = this.innerHTML ; 
        makeSound (key) ; 
        makeAnimation (key) ; 
    } )
}



function makeSound (key) { 
    switch (key) { 
        case "a" : 
        var audio = new Audio ("sounds/crash.mp3") ; 
        audio.play() ; 
        break; 

        case "s" : 
        var audio = new Audio ("sounds/kick-bass.mp3") ; 
        audio.play() ; 
        break; 

        case "d" : 
        var audio = new Audio ("sounds/snare.mp3") ; 
        audio.play() ; 
        break; 

        case "f" : 
        var audio = new Audio ("sounds/tom-1.mp3") ; 
        audio.play() ; 
        break; 

        case "j" : 
        var audio = new Audio ("sounds/tom-2.mp3") ; 
        audio.play() ; 
        break; 

        case "k" : 
        var audio = new Audio ("sounds/tom-3.mp3") ; 
        audio.play() ; 
        break; 

        case "l" : 
        var audio = new Audio ("sounds/tom-4.mp3") ; 
        audio.play() ; 
        break; 
    }
}

function makeAnimation (key) { 
    var animatedbutton =  document.querySelector("." + key) 
    animatedbutton.classList.add ("pressed") ; 
    setTimeout(() => {
        animatedbutton.classList.remove("pressed")
    }, 100);
}

document.addEventListener("keypress" , function (event) { 
    makeSound(event.key) ; 
    makeAnimation(event.key) ; 

})

