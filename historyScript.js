window.onload = codeAddress;
var model = document.querySelectorAll('.model');
var text = document.querySelectorAll('.text');
var portrait = false;
var current_scroll = 0;
var width = window.innerWidth;
var height = window.innerHeight;
if(height > width){
    portrait = true;
}

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

//เริ่มเว็บ
function codeAddress() {
    var model = document.querySelectorAll('.model');
    var text = document.querySelectorAll('.text');
    var screen_height = window.innerHeight;
    var scrollv = $(this).scrollTop();
    if(screen_height > scrollv){
        if(portrait==false){
            model[0].style.transform = 'translate(0, 2vh)';
            model[1].style.transform = 'translate(1vw, -2vh)';
            model[2].style.transform = 'translate(-1vw, -2vh)';
            text[0].style.transform = 'translate(-50%, 50%)';
        }
        else{
            model[0].style.transform = 'translate(0, 5vh)';
            model[1].style.transform = 'translate(7vw, -2vh)';
            model[2].style.transform = 'translate(-15vw, -2vh)';
            text[0].style.transform = 'translate(-50%, 25vh)';
        }
        text[0].style.transition = '1s';
    }
}

//scroll
$(window).scroll(function () {
    if(window.innerHeight > window.innerWidth){
        portrait = true;
    }
    else{
        portrait = false;
    }
    var scrollv = $(this).scrollTop();
    var screen_height = window.innerHeight;
    console.log("window : "+screen_height)
    console.log("page : "+scrollv.toFixed())
    // รูปกลุ่มแรก
    if(portrait == false){
        if(scrollv >= screen_height*2 && scrollv > current_scroll){
            model[0].style.transform = 'translate(-10%, -100%)';
            model[1].style.transform = 'translate(-50%, 100%)';
            model[2].style.transform = 'translate(50%, 100%)';
            text[0].style.transform = 'translate(-50%, -80vh)';
        }
        else if(scrollv > current_scroll && scrollv >= screen_height*0){
            text[0].style.transition = '1s';
            model[0].style.transform = 'translate(0, 2vh)';
            model[1].style.transform = 'translate(1vw, -2vh)';
            model[2].style.transform = 'translate(-1vw, -2vh)';
            text[0].style.transform = 'translate(-50%, 50%)';
        }
        else if(scrollv < current_scroll && scrollv < screen_height*0){
            model[0].style.transform = 'translate(-10%, -100%)';
            model[1].style.transform = 'translate(-50%, 100%)';
            model[2].style.transform = 'translate(50%, 100%)';
            text[0].style.transform = 'translate(-50%, -80vh)';
        }
        else if(scrollv < current_scroll && scrollv < screen_height*2){
            text[0].style.transition = '1s';
            model[0].style.transform = 'translate(0, 2vh)';
            model[1].style.transform = 'translate(1vw, -2vh)';
            model[2].style.transform = 'translate(-1vw, -2vh)';
            text[0].style.transform = 'translate(-50%, 50%)';
        }
        else{
            model[0].style.transform = 'translate(-10%, -100%)';
            model[1].style.transform = 'translate(-50%, 100%)';
            model[2].style.transform = 'translate(50%, 100%)';
            text[0].style.transform = 'translate(-50%, -80vh)';
        }

    // รูปกลุ่มสอง
    if(scrollv >= screen_height*6 && scrollv > current_scroll){
        model[3].style.transform = 'translate(0%, -100%)';
        model[4].style.transform = 'translate(-150%, 0%) scaleX(-1)';
        model[5].style.transform = 'translate(150%, 0%)';
        text[1].style.transform = 'translate(-50%, -80vh)';
    }
    else if(scrollv > current_scroll && scrollv >= screen_height*4){
        model[3].style.transform = 'translate(0, 5vh)';
        model[4].style.transform = 'translate(25vw, 0%) scaleX(-1)';
        model[5].style.transform = 'translate(-25vw, 0%)';
        text[1].style.transform = 'translate(-50%, 25vh)';
        text[1].style.transition = '1s';
    }
    else if(scrollv < current_scroll && scrollv < screen_height*4){
        model[3].style.transform = 'translate(0%, -100%)';
        model[4].style.transform = 'translate(-150%, 0%) scaleX(-1)';
        model[5].style.transform = 'translate(150%, 0%)';
        text[1].style.transform = 'translate(-50%, 50vh)';
    }
    else if(scrollv < current_scroll && scrollv < screen_height*6){
        model[3].style.transform = 'translate(0, 5vh)';
        model[4].style.transform = 'translate(25vw, 0%) scaleX(-1)';
        model[5].style.transform = 'translate(-25vw, 0%)';
        text[1].style.transform = 'translate(-50%, 25vh)';
        text[1].style.transition = '1s';
    }
    else{
        model[3].style.transform = 'translate(0%, -100%)';
        model[4].style.transform = 'translate(-150%, 0%) scaleX(-1)';
        model[5].style.transform = 'translate(150%, 0%)';
        text[1].style.transform = 'translate(-50%, 50vh)';
    }

    //กลุ่มสาม
    if(scrollv >= screen_height*10 && scrollv > current_scroll){
        model[6].style.transform = 'translate(-100vw, -2vw)';
        model[7].style.transform = 'translate(-100vw, 1vw)';
        model[8].style.transform = 'translate(-100vw, 0)';
        model[9].style.transform = 'translate(-100vw, 1vw)';
        model[10].style.transform = 'translate(-100vw, 1.5vw)';
        text[2].style.transform = 'translate(-50%, -60vh)';
    }
    else if(scrollv >= screen_height*8 && current_scroll < scrollv){
        model[6].style.transform = 'translate(-73vw, -15vh)';
        model[7].style.transform = 'translate(-25vw, -30vh)';
        model[8].style.transform = 'translate(-39.5vw, -49vh)';
        model[9].style.transform = 'translate(-30vw, 21vh)';
        model[10].style.transform = 'translate(-31vw, -18vh)';
        text[2].style.transform = 'translate(-50%, 30vh)';
        text[2].style.transition = '1s';
        for(let i = 6; i <= 10 ; i++){
            model[i].style.transition = '1.5s';
        }
    }
    else if(scrollv < screen_height*8 && current_scroll >scrollv){
        model[6].style.transform = 'translate(100%, 5%)';
        model[7].style.transform = 'translate(20%, 100%)';
        model[8].style.transform = 'translate(20%, 100%)';
        model[9].style.transform = 'translate(100%, -100%)';
        model[10].style.transform = 'translate(100%, 0)';
        text[2].style.transform = 'translate(-50%, 50vh)';
    }
    else if(scrollv < screen_height*10 && current_scroll > scrollv){
        model[6].style.transform = 'translate(-73vw, -15vh)';
        model[7].style.transform = 'translate(-25vw, -30vh)';
        model[8].style.transform = 'translate(-39.5vw, -49vh)';
        model[9].style.transform = 'translate(-30vw, 21vh)';
        model[10].style.transform = 'translate(-31vw, -18vh)';
        text[2].style.transform = 'translate(-50%, 30vh)';
        text[2].style.transition = '1s';
        for(let i = 6; i <= 10 ; i++){
            model[i].style.transition = '1.5s';
        }
    }
    else{
        model[6].style.transform = 'translate(-100vw, -2vw)';
        model[7].style.transform = 'translate(-100vw, 1vw)';
        model[8].style.transform = 'translate(-100vw, 0)';
        model[9].style.transform = 'translate(-100vw, 1vw)';
        model[10].style.transform = 'translate(-100vw, 1.5vw)';
        text[2].style.transform = 'translate(-50%, -60vh)';
    }

    //กลุ่มสี่
    if(scrollv >= screen_height*14 && scrollv > current_scroll){
        model[11].style.transform = 'translate(-100%, 0%)';
        model[12].style.transform = 'translate(0%, 100%)';
        text[3].style.transform = 'translate(-50%, -60vh)';
    }
    else if(scrollv >= screen_height*12 && scrollv > current_scroll){
        model[11].style.transform = 'translate(37.5vw, 0%)';
        model[12].style.transform = 'translate(0%, 32vh)';
        text[3].style.transform = 'translate(-50%, -35vh)';
        text[3].style.transition = '1s';
    }
    else if(scrollv < screen_height*12 && current_scroll >scrollv){
        model[11].style.transform = 'translate(-100%, 0%)';
        model[12].style.transform = 'translate(0%, 100%)';
        text[3].style.transform = 'translate(-50%, 50vh)';
    }
    else if(scrollv < screen_height*14 && current_scroll > scrollv){
        model[11].style.transform = 'translate(37.5vw, 0%)';
        model[12].style.transform = 'translate(0%, 32vh)';
        text[3].style.transform = 'translate(-50%, -35vh)';
        text[3].style.transition = '1s';
    }
    else{
        model[11].style.transform = 'translate(-100%, 0%)';
        model[12].style.transform = 'translate(0%, 100%)';
        text[3].style.transform = 'translate(-50%, 50vh)';
    }

    //กลุ่มห้า
    if(scrollv >= screen_height*18 && scrollv > current_scroll){
        // pass
    }
    else if(scrollv >= screen_height*16 && scrollv > current_scroll){
        model[13].style.transform = 'translate(38vw, 20vh)';
        model[14].style.transform = 'translate(-38vw, 20vh)';
        text[4].style.transform = 'translate(-50%, 25vh)';
        text[4].style.transition = '1s';
    }
    else if(scrollv < screen_height*16 && current_scroll >scrollv){
        model[13].style.transform = 'translate(-100%, -100%)';
        model[14].style.transform = 'translate(100%, -100%)';
        text[4].style.transform = 'translate(-50%, 50vh)';
    }
    else if(scrollv < screen_height*18 && current_scroll > scrollv){
        model[13].style.transform = 'translate(38vw, 20vh)';
        model[14].style.transform = 'translate(-38vw, 20vh)';
        text[4].style.transform = 'translate(-50%, 25vh)';
        text[4].style.transition = '1s';
    }

    //กลุ่มหก
    if(scrollv > screen_height*18){
        if(scrollv >= screen_height*22 && scrollv > current_scroll){
            model[13].style.transform = 'translate(18vw, 120vh)';
            model[14].style.transform = 'translate(-80vw, 120vh)';
        }
        else if(scrollv >= screen_height*20 && scrollv > current_scroll){
            text[4].style.transform = 'translate(-50%, -60vh)';
            model[13].style.transform = 'translate(18vw, 35vh)';
            model[14].style.transform = 'translate(-80vw, 25vh)';
        }
        else if(scrollv < screen_height*20 && current_scroll >scrollv){
            model[13].style.transform = 'translate(38vw, 20vh)';
            model[14].style.transform = 'translate(-38vw, 20vh)';
            text[4].style.transform = 'translate(-50%, 25vh)';
        }
        else if(scrollv < screen_height*22 && current_scroll > scrollv){
            model[13].style.transform = 'translate(18vw, 35vh)';
            model[14].style.transform = 'translate(-80vw, 25vh)';
        }
    }

    if(scrollv >= screen_height*22 && scrollv > current_scroll){
        model[15].style.transform = 'translate(100%, -100%)';
        model[16].style.transform = 'translate(-100%, 100%)';
        model[17].style.transform = 'translate(100%, 100%)';
        model[18].style.transform = 'translate(100%, -100%)';
        model[19].style.transform = 'translate(100%, 100%)';
    }
    else if(scrollv >= screen_height*20 && scrollv > current_scroll){
        model[15].style.transform = 'translate(-100%, 30%)';
        model[16].style.transform = 'translate(32.5vw, )';
        model[17].style.transform = 'translate(-70%, -90%)';
        model[18].style.transform = 'translate(-100%, 30%)';
        model[19].style.transform = 'translate(-50%, -90%)';
    }
    else if(scrollv < screen_height*20 && current_scroll >scrollv){
        model[15].style.transform = 'translate(100%, -100%)';
        model[16].style.transform = 'translate(-100%, 100%)';
        model[17].style.transform = 'translate(100%, 100%)';
        model[18].style.transform = 'translate(100%, -100%)';
        model[19].style.transform = 'translate(100%, 100%)';
    }
    else if(scrollv < screen_height*22 && current_scroll > scrollv){
        model[15].style.transform = 'translate(-100%, 30%)';
        model[16].style.transform = 'translate(32.5vw, 90%)';
        model[17].style.transform = 'translate(-70%, -90%)';
        model[18].style.transform = 'translate(-100%, 30%)';
        model[19].style.transform = 'translate(-50%, -90%)';
    }
    }

    // portrait
    else if(portrait){
        // รูปกลุ่มแรก
        if(scrollv >= screen_height*2 && scrollv > current_scroll){
            model[0].style.transform = 'translate(-10%, -100%)';
            model[1].style.transform = 'translate(-100%, 0%)';
            model[2].style.transform = 'translate(100%, 100%)';
            text[0].style.transform = 'translate(-50%, -80vh)';
        }
        else if(scrollv > current_scroll && scrollv >= screen_height*0){
            text[0].style.transition = '1s';
            model[0].style.transform = 'translate(0, 5vh)';
            model[1].style.transform = 'translate(7vw, -2vh)';
            model[2].style.transform = 'translate(-15vw, -2vh)';
            text[0].style.transform = 'translate(-50%, 25vh)';
        }
        else if(scrollv < current_scroll && scrollv < screen_height*0){
            model[0].style.transform = 'translate(-10%, -100%)';
            model[1].style.transform = 'translate(-100%, 0%)';
            model[2].style.transform = 'translate(100%, 100%)';
            text[0].style.transform = 'translate(-50%, -80vh)';
        }
        else if(scrollv < current_scroll && scrollv < screen_height*2){
            text[0].style.transition = '1s';
            model[0].style.transform = 'translate(0, 5vh)';
            model[1].style.transform = 'translate(7vw, -2vh)';
            model[2].style.transform = 'translate(-15vw, -2vh)';
            text[0].style.transform = 'translate(-50%, 25vh)';
        }
        else{
            model[0].style.transform = 'translate(-10%, -100%)';
            model[1].style.transform = 'translate(-100%, 0%)';
            model[2].style.transform = 'translate(100%, 100%)';
            text[0].style.transform = 'translate(-50%, -80vh)';
        }

        // รูปกลุ่มสอง
        if(scrollv >= screen_height*6 && scrollv > current_scroll){
            model[3].style.transform = 'translate(0%, -100%)';
            model[4].style.transform = 'translate(-150%, 0%) scaleX(-1)';
            model[5].style.transform = 'translate(150%, 0%)';
            text[1].style.transform = 'translate(-50%, -80vh)';
        }
        else if(scrollv > current_scroll && scrollv >= screen_height*4){
            model[3].style.transform = 'translate(0, 18vh)';
            model[4].style.transform = 'translate(1vw, 0%) scaleX(-1)';
            model[5].style.transform = 'translate(-1vw, 0%)';
            text[1].style.transform = 'translate(-50%, 25vh)';
            text[1].style.transition = '1s';
        }
        else if(scrollv < current_scroll && scrollv < screen_height*4){
            model[3].style.transform = 'translate(0%, -100%)';
            model[4].style.transform = 'translate(-150%, 0%) scaleX(-1)';
            model[5].style.transform = 'translate(150%, 0%)';
            text[1].style.transform = 'translate(-50%, 50vh)';
        }
        else if(scrollv < current_scroll && scrollv < screen_height*6){
            model[3].style.transform = 'translate(0, 18vh)';
            model[4].style.transform = 'translate(1vw, 0%) scaleX(-1)';
            model[5].style.transform = 'translate(-1vw, 0%)';
            text[1].style.transform = 'translate(-50%, 25vh)';
            text[1].style.transition = '1s';
        }
        //กลุ่มสาม
        if(scrollv >= screen_height*10 && scrollv > current_scroll){
            model[6].style.transform = 'translate(-100vw, -9vh)';
            model[7].style.transform = 'translate(-100vw, -8vh)';
            model[8].style.transform = 'translate(-100vw, 0)';
            model[9].style.transform = 'translate(-100vw, 0vw)';
            model[10].style.transform = 'translate(-100vw, 0vw)';
            text[2].style.transform = 'translate(-50%, -60vh)';
        }
        else if(scrollv >= screen_height*8 && current_scroll < scrollv){
            model[6].style.transform = 'translate(-25vw, -7vh)';
            model[7].style.transform = 'translate(-5vw, -6vh)';
            model[8].style.transform = 'translate(-50vw, 0%)';
            model[9].style.transform = 'translate(10vw, 2vh)';
            model[10].style.transform = 'translate(-64vw, 0)';
            text[2].style.transform = 'translate(-50%, 30vh)';
            text[2].style.transition = '1s';
            for(let i = 6; i <= 10 ; i++){
                model[i].style.transition = '1.5s';
            }
        }
        else if(scrollv < screen_height*8 && current_scroll >scrollv){
            model[6].style.transform = 'translate(100%, 50%)';
            model[7].style.transform = 'translate(100%, 50%)';
            model[8].style.transform = 'translate(100%, 10%)';
            model[9].style.transform = 'translate(100%, 30%)';
            model[10].style.transform = 'translate(100%, 20%)';
            text[2].style.transform = 'translate(-50%, 50vh)';
        }
        else if(scrollv < screen_height*10 && current_scroll > scrollv){
            model[6].style.transform = 'translate(-25vw, -7vh)';
            model[7].style.transform = 'translate(-5vw, -6vh)';
            model[8].style.transform = 'translate(-50vw, 0%)';
            model[9].style.transform = 'translate(10vw, 2vh)';
            model[10].style.transform = 'translate(-64vw, 0)';
            text[2].style.transform = 'translate(-50%, 30vh)';
            text[2].style.transition = '1s';
            for(let i = 6; i <= 10 ; i++){
                model[i].style.transition = '1.5s';
            }
        }

        // //กลุ่มสี่
        if(scrollv >= screen_height*14 && scrollv > current_scroll){
            model[11].style.transform = 'translate(-100%, 0%)';
            model[12].style.transform = 'translate(0%, 100%)';
            text[3].style.transform = 'translate(-50%, -60vh)';
        }
        else if(scrollv >= screen_height*12 && scrollv > current_scroll){
            model[11].style.transform = 'translate(0%, 0%)';
            model[12].style.transform = 'translate(0, 0%)';
            text[3].style.transform = 'translate(-50%, -35vh)';
            text[3].style.transition = '1s';
        }
        else if(scrollv < screen_height*12 && current_scroll >scrollv){
            model[11].style.transform = 'translate(-100%, 0%)';
            model[12].style.transform = 'translate(0%, 100%)';
            text[3].style.transform = 'translate(-50%, 50vh)';
        }
        else if(scrollv < screen_height*14 && current_scroll > scrollv){
            model[11].style.transform = 'translate(0%, 0%)';
            model[12].style.transform = 'translate(0, 0%)';
            text[3].style.transform = 'translate(-50%, -35vh)';
            text[3].style.transition = '1s';
        }

        //กลุ่มห้า
    if(scrollv >= screen_height*18 && scrollv > current_scroll){
        // pass
    }
    else if(scrollv >= screen_height*16 && scrollv > current_scroll){
        model[13].style.transform = 'translate(6vw, 0%)';
        model[14].style.transform = 'translate(-6vw, 0%)';
        text[4].style.transform = 'translate(-50%, 25vh)';
        text[4].style.transition = '1s';
    }
    else if(scrollv < screen_height*16 && current_scroll >scrollv){
        model[13].style.transform = 'translate(-100%, 0%)';
        model[14].style.transform = 'translate(100%, 0%)';
        text[4].style.transform = 'translate(-50%, 50vh)';
    }
    else if(scrollv < screen_height*18 && current_scroll > scrollv){
        model[13].style.transform = 'translate(6vw, 0%)';
        model[14].style.transform = 'translate(-6vw, 0%)';
        text[4].style.transform = 'translate(-50%, 25vh)';
        text[4].style.transition = '1s';
    }
    }

    current_scroll = scrollv;
})

// resize
// function changeSize() {
//     if(window.innerHeight > window.innerWidth != height > width){
//         location.reload();
//     }
// }

//   window.onresize = changeSize;