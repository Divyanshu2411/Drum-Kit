//video 7 ke baad se sare dekh lena, very interesting <3


let numberOfDrumBtn= document.querySelectorAll(".drum").length;
// w a s dj k l

function playKey(key){
    switch(key)
        {
            case 'w':
                let crash= new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case 'a':
                let kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;

            case 's':
                let snare= new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case 'd':
                let tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case 'j':
                let tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case 'k':
                let tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case 'l':
                let tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            default:
                console.log(this.innerHTML);
        }
}

function addAnimation(key)
{
    let btn="."+key;

    document.querySelector(btn).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector(btn).classList.remove("pressed")
    },100);

}

//adding on click mouse event

 for(let i=0; i<numberOfDrumBtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playKey(this.innerHTML);
        addAnimation(this.innerHTML);
    });
}
 


// for(let i=0; i<numberOfDrumBtn;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", playKey(this.innerHTML));
// }

//adding on press keyboard event
/**
    document.addEventListener("keypress",function(event){
    console.log(event);
});
**/

document.addEventListener("keypress",function(event){
    playKey(event.key);
    addAnimation(event.key);
});

// document.addEventListener("keypress",playKey(event.key));
//     // playKey(event.key););