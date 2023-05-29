document.onkeydown = function(button){
    console.log("Key code is: ", button.keyCode)

    if (button.keyCode == 32 || button.keyCode == 38 || button.keyCode == 87) {
        jump = document.querySelector(".mario");
        if(jump.classList != "mariojump") {
            // jump.classList.remove('mariojump');
            setTimeout(() => {jump.classList.remove('mariojump')}
            , 1000);}
            jump.classList.add('mariojump');
    }

    if(button.keyCode==39 || button.keyCode==68){
        foreward = document.querySelector('.mario');
        foreward.classList.add('marioforeward');
        setTimeout( () => {foreward.classList.remove('marioforeward')}
        , 1000);
    }
}

setTimeout( () => {
    obs1animate = document.querySelector('.obs1')
    obs1animate.classList.add('obs1animation')
}, 1500)

setInterval( () => {
    obs2animate = document.querySelector('.obs2');
    obs2animate.classList.add('obs2animation');
    setTimeout(() => {
        obs2animate.classList.remove('obs2animation');
        obs2animate.style.visibility = "hidden"
    }, 3500)
    obs2animate.style.visibility = "visible"
}, 7000)

score = 0;
// document.getElementById('score').innerHTML += score;

setInterval( () => {
    mario = document.querySelector('.mario');
    obs1 = document.querySelector('.obs1');
    obs2 = document.querySelector('.obs2');

    mariox = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
    obs1x = parseInt(window.getComputedStyle(obs1).getPropertyValue('left')) - 30;
    obs2x = parseInt(window.getComputedStyle(obs2).getPropertyValue('left'))- 30;

    marioy = parseInt(window.getComputedStyle(mario).getPropertyValue('bottom'));
    obs1y = parseInt(window.getComputedStyle(obs1).getPropertyValue('bottom'));
    obs2y = parseInt(window.getComputedStyle(obs2).getPropertyValue('bottom'));

    offsetx1 = obs1x - mariox;
    offsetx2 = obs2x - mariox;

    offsety1 = marioy - obs1y;
    offsety2 = marioy - obs2y;

    console.log(offsetx1, offsetx2, offsety1, offsety2, score)

    if((offsetx1 < 30 && offsety1 < 10) || (offsetx2 < 50 && offsety2 < 15)) {
        document.getElementById('gameOver').style.visibility = "visible";
        obs1.classList.remove('obs1animation');
    }  
    
    if(offsetx1 < 0){
        score += 1;
    }
    if(offsetx2 < 0){
        score += 1;
    }

},100)
//     if((mariox - obs1 < 5.5vw || mariox - obs2 < 5.5 vw) && (mariox - obs1 < 5.5vw || mariox - obs2 < 5.5 vw))

// }, 1000)
t=0;
function time() {
    console.log(t+=1, score)
};
setTimeout(time(),1000);