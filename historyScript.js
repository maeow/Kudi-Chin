// window.onload = codeAddress;
var model = document.querySelectorAll('.model');
var text = document.querySelectorAll('.text');
var portrait = false;
var current_scroll = 0;
var width = window.innerWidth;
var height = window.innerHeight;
var screen_height = window.innerHeight;
var fire = document.querySelectorAll('.fire');

function zeroShow(portrait){
    model[0].style.top = 'calc(50% - 8vw)';
}
function zeroHide(portrait){
    model[0].style.top = 'calc(0% - 8vmax)';
}
function firstShow(portrait){
    for(var i = 0; i<5 ; i++){
        fire[i].style.opacity = '1';
    }
    if(portrait){
        model[1].style.top = '4vh';
        model[2].style.top = '30vh';
        model[2].style.left = '2vw';
        model[3].style.top = '51vh';
        model[3].style.right = '10vw';
        text[0].style.top = '74vh'
    }
    else{
        model[1].style.top = '2vh';
        model[2].style.bottom = '2vh';
        model[2].style.left = '1.25vw';
        model[3].style.bottom = '2vh';
        model[3].style.right = '1.25vw';
        text[0].style.top = '57vh'
    }
}
function firstHide(scrollv, portrait){
    for(var i = 0; i<5 ; i++){
        fire[i].style.opacity = '0';
    }
    if(portrait){
        model[1].style.top = '-30vh';
        model[2].style.top = '30vh';
        model[2].style.left = '-58vw';
        model[3].style.top = '51vh';
        model[3].style.right = '-58vw';
        if(scrollv>=height*10){
            text[0].style.top = '-15vh';
        }
        else{
            text[0].style.top = '120vh';
        }
    }
    else{
        model[1].style.top = '-55vh';
        model[2].style.bottom = '-30vh';
        model[2].style.left = '-25vw';
        model[3].style.bottom = '-30vh';
        model[3].style.right = '-25vw';
        if(scrollv>=height*10){
            text[0].style.top = '-15vh';
        }
        else{
            text[0].style.top = '120vh';
        }
    }
}
function secondShow(portrait){
    model[5].style.right = '55vw';
    model[6].style.left = '55vw';
    if(portrait){
        model[4].style.top = '20vh';
        text[1].style.top = '75vh'
    }
    else{
        model[4].style.top = '5vh';
        text[1].style.top = '75vh'
    }
}
function secondHide(scrollv, portrait){
    model[4].style.top = '-33vmax';
    model[5].style.right = '100vw';
    model[6].style.left = '100vw';
    if(scrollv>=height*16){
        text[1].style.top = '-20vh';
    }
    else{
        text[1].style.top = '120vh';
    }
}
function thirdShow(portrait){
    if(portrait){
        model[7].style.right = '11vw';
        model[7].style.top = '21vh';
        model[8].style.top = '34vh';
        model[8].style.right = '0vw';
        model[9].style.top = '20vh';
        model[9].style.right = '55vw';
        model[10].style.top = '4vh';
        model[10].style.right = '-23vw';
        model[11].style.top = '32vh';
        model[11].style.right = '64vw';
        text[2].style.top = '80vh'
    }
    else{
        model[7].style.right = '68vw';
        model[7].style.bottom = '37vh';
        model[8].style.bottom = '30vh';
        model[8].style.right = '48vw';
        model[9].style.bottom = '50vh';
        model[9].style.right = '46vw';
        model[10].style.top = '22vh';
        model[10].style.right = '30vw';
        model[11].style.top = '36vh';
        model[11].style.right = '30vw';
        text[2].style.bottom = '15vh'
    }
}
function thirdHide(scrollv, portrait){
    if(portrait){
        if(scrollv>=height*22){
            model[7].style.right = '100vw';
            model[7].style.top = '21vh';
            model[8].style.top = '34vh';
            model[8].style.right = '100vw';
            model[9].style.top = '20vh';
            model[9].style.right = '100vw';
            model[10].style.top = '4vh';
            model[10].style.right = '100vw';
            model[11].style.top = '32vh';
            model[11].style.right = '100vw';
            text[2].style.top = '-20vh'
        }
        else{
            model[7].style.right = '-71vw';
            model[7].style.top = '23vh';
            model[8].style.top = '45vh';
            model[8].style.right = '-70vw';
            model[9].style.top = '25vh';
            model[9].style.right = '-55vw';
            model[10].style.top = '6vh';
            model[10].style.right = '-73vw';
            model[11].style.top = '34vh';
            model[11].style.right = '-54vw';
            text[2].style.top = '120vh'
        }
    }
    else{
        if(scrollv>=height*22){
            model[7].style.bottom = '30vh';
            model[7].style.right = '100vw';
            model[8].style.bottom = '20vh';
            model[8].style.right = '100vw';
            model[9].style.bottom = '15vh';
            model[9].style.right = '100vw';
            model[10].style.top = '8vh';
            model[10].style.right = '100vw';
            model[11].style.top = '80vh';
            model[11].style.right = '100vw';
            text[2].style.bottom = '120vh'
        }
        else{
            model[7].style.bottom = '20vh';
            model[7].style.right = '-20vw';
            model[8].style.bottom = '-50vh';
            model[8].style.right = '20vw';
            model[9].style.bottom = '-40vh';
            model[9].style.right = '10vw';
            model[10].style.top = '-45vh';
            model[10].style.right = '-20vw';
            model[11].style.top = '50vh';
            model[11].style.right = '-15vw';
            text[2].style.bottom = '-10vh'
        }
    }
}
function forthShow(portrait){
   if(portrait){
        model[12].style.right = '20vw';
        model[13].style.bottom = '0vh';
        text[3].style.top = '20vh'
   }
   else{
        model[12].style.right = 'calc(50% - 16vmax)';
        model[13].style.bottom = '-33vh';
        text[3].style.top = '15vh'
   }
}
function forthHide(scrollv, portrait){
    if(portrait){
        model[12].style.right = '100vw';
        model[13].style.bottom = '-33vh';
        if(scrollv>=height*28){
            text[3].style.top = '-20vh'
        }
        else{
            text[3].style.top = '120vh'
        }
    }
    else{
        model[12].style.right = '100vw';
        model[13].style.bottom = '-60vh';
        if(scrollv>=height*28){
            text[3].style.top = '-20vh'
        }
        else{
            text[3].style.top = '120vh'
        }
    }
}
function fifthShow(portrait){
    text[4].style.top = '70vh'
    model[14].style.top = '20vh';
    model[14].style.right = '50vw';
    model[15].style.top = '20vh';
    model[15].style.left = '50vw';
    model[14].style.transform = 'none'
    model[15].style.transform = 'none'
}
function fifthHide(scrollv, portrait){
    if(portrait){
        if(scrollv>=height*34 && scrollv<height*42){
            if(scrollv>=height*36){
                // เปลี่ยนเลย์เอาท์
            model[14].style.top = '40vh';
            model[14].style.right = '63vw';
            model[15].style.top = '45vh';
            model[15].style.left = '18vw';
            text[4].style.top = '-20vh'
            model[14].style.transform = 'scale(0.65)';
            model[15].style.transform = 'scale(0.65)';
            }
        }
        else if(scrollv<height*30){
            // ก่อนเริ่ม
            model[14].style.top = '30vh';
            model[14].style.right = '100vw';
            model[15].style.top = '30vh';
            model[15].style.left = '100vw';
            text[4].style.top = '120vh'
        }
        else{
            // จบสุด
            model[14].style.top = '40vh';
            model[14].style.right = '100vw';
            model[15].style.top = '50vh';
            model[15].style.left = '-40vw';
            model[14].style.transform = 'scale(0.65)';
            model[15].style.transform = 'scale(0.65)';
        }
    }
    else{
        if(scrollv>=height*34 && scrollv<height*42){
            if(scrollv>=height*36){
                // เปลี่ยนเลย์เอาท์
            model[14].style.top = '30vh';
            model[14].style.right = '63vw';
            model[15].style.top = '20vh';
            model[15].style.left = '15.5vw';
            text[4].style.top = '-20vh'
            }
        }
        else if(scrollv<height*30){
            // ก่อนเริ่ม
            model[14].style.top = '20vh';
            model[14].style.right = '100vw';
            model[15].style.top = '20vh';
            model[15].style.left = '100vw';
            text[4].style.top = '100vh'
        }
        else{
            // จบสุด
            model[14].style.top = '120vh';
            model[14].style.right = '63vw';
            model[15].style.top = '120vh';
            model[15].style.left = '15.5vw';
        }
    }
}
function sixthShow(portrait){
    if(portrait){
        model[16].style.top = '28vh';
        model[16].style.left = '25vw';
        model[17].style.top = '37vh';
        model[17].style.right = '10vw';
        model[18].style.top = '16vh';
        model[18].style.right = '10vw';
        model[19].style.top = '50vh';
        model[19].style.right = '20vw';
        model[20].style.top = '15vh';
        model[20].style.left = '0vw';
        model[20].style.transform = 'none'
        text[5].style.top = '80vh'
    }
    else{
        model[16].style.top = '18vh';
        model[16].style.left = '36vw';
        model[17].style.bottom = '28vh';
        model[17].style.right = '40vw';
        model[18].style.top = '10vh';
        model[18].style.right = '26vw';
        model[19].style.bottom = '30vh';
        model[19].style.right = '20vw';
        model[20].style.top = '10vh';
        model[20].style.left = '27vw';
        model[20].style.transform = 'none'
        text[5].style.bottom = '10vh'
    }
}
function sixthHide(scrollv, portrait){
    if(portrait){
        if(scrollv>=height*42 && scrollv<height*46){
            // เปลี่ยนหน้า
            model[16].style.top = '28vh';
            model[16].style.left = '100vw';
            model[17].style.top = '40vh';
            model[17].style.right = '-30vw';
            model[18].style.top = '16vh';
            model[18].style.right = '100vw';
            model[19].style.top = '47vh';
            model[19].style.right = '100vw';
            model[20].style.top = '30vh';
            model[20].style.left = 'calc(50% - 10.5vmax)';
            model[20].style.transform = 'scale(2)'
            text[5].style.top = '-20vh'
            model[20].style.opacity = '1';
        }
        else if(scrollv>=height*46){
            // ลุงหาย
            // model[20].style.left = '-20vw';
            model[20].style.opacity = '0';
        }
        else{
            // เริ่มต้น
            model[16].style.top = '-30vh';
            model[16].style.left = '20vw';
            model[17].style.top = '37vh';
            model[17].style.right = '-30vw';
            model[18].style.top = '-20vh';
            model[18].style.right = '-50vw';
            model[19].style.top = '51vh';
            model[19].style.right = '-30vw';
            model[20].style.top = '-40vh';
            model[20].style.left = '35vw';
            model[20].style.transform = 'none'
            text[5].style.top = '120vh'
        }
    }
    else{
        if(scrollv>=height*42 && scrollv<height*46){
            model[16].style.top = '120vh';
            model[16].style.left = '27vw';
            model[17].style.bottom = '-40vh';
            model[17].style.right = '47vw';
            model[18].style.top = '120vh';
            model[18].style.right = '33vw';
            model[19].style.bottom = '-40vh';
            model[19].style.right = '20vw';
            model[20].style.top = '30vh';
            model[20].style.left = '60vw';
            model[20].style.transform = 'scale(1.3)'
            text[5].style.bottom = '120vh'
        }
        else if(scrollv>=height*46){
            model[20].style.left = '-20vw';
        }
        else{
            model[16].style.top = '120vh';
            model[16].style.left = '-10vw';
            model[17].style.bottom = '-40vh';
            model[17].style.right = '20vw';
            model[18].style.top = '0vh';
            model[18].style.right = '-30vw';
            model[19].style.bottom = '-30vh';
            model[19].style.right = '-20vw';
            model[20].style.top = '-40vh';
            model[20].style.left = '35vw';
            model[20].style.transform = 'none'
            text[5].style.bottom = '-10vh'
        }
    }
}
function seventhShow(portrait){
    if(portrait){
        text[6].style.opacity = '1';
        text[6].style.top = '75vh'
    }
    else{
        text[6].style.bottom = '35vh'
        text[6].style.right = '7vw'
    }
}
function seventhHide(scrollv, portrait){
    if(portrait){
        text[6].style.opacity = '0';
    }
    else{
        if(scrollv>=height*46){
            text[6].style.bottom = '120vh'
            text[6].style.right = '0vw'
        }
        else{
            text[6].style.bottom = '-15vh'
            text[6].style.right = '0vw'
        }
    }
}
function eighthShow(portrait){
    if(portrait){
        model[21].style.top = '32vh';
        text[7].style.top = '47vh'
    }
    else{
        model[21].style.top = '27vh';
        text[7].style.top = '57vh'
    }
}
function eighthHide(scrollv, portrait){
    model[21].style.top = '120vh';
    text[7].style.top = '120vh'
}
// alert(model[1].getAttribute('data-img'))

// function codeAddress(){
    var scrollv = $(this).scrollTop();
    // check แนวจอ
    if(window.innerHeight > window.innerWidth){
        portrait = true;
    }
    else{
        portrait = false;
    }
    //

    if(scrollv < height*4){
        zeroShow(portrait);
    }else{
        zeroHide(portrait);
    }
    if(scrollv >= height*6 && scrollv < height*10){
        firstShow(portrait);
     }
     else{
        firstHide(scrollv, portrait);
     }
    if(scrollv >= height*12 && scrollv < height*16){
       secondShow(portrait);
    }
    else{
       secondHide(scrollv, portrait);
    }
    if(scrollv >= height*18 && scrollv < height*22){
        thirdShow(portrait);
    }
    else{
        thirdHide(scrollv, portrait);
    }
    if(scrollv >= height*24 && scrollv < height*28){
        forthShow(portrait);
    }
    else{
        forthHide(scrollv,  portrait);
    }
    if(scrollv >= height*30 && scrollv < height*36){
        fifthShow(portrait);
    }
    else{
        fifthHide(scrollv, portrait);
    }
    if(scrollv >= height*36 && scrollv < height*42){
        sixthShow(portrait);
    }
    else{
        sixthHide(scrollv, portrait);
    }
    if(scrollv >= height*42 && scrollv < height*46){
        seventhShow(portrait);
    }
    else{
        seventhHide(scrollv, portrait);
    }
    if(scrollv >= height*48){
        eighthShow(portrait);
    }
    else{
        eighthHide(scrollv, portrait);
    }
// }

$(window).scroll(function () {
    // check แนวจอ
    if(window.innerHeight > window.innerWidth){
        portrait = true;
    }
    else{
        portrait = false;
    }
    var scrollv = $(this).scrollTop();
    // 

    console.log(scrollv)
    if(scrollv < height*4){
        zeroShow(portrait);
    }
    else{
        zeroHide(portrait);
    }
    if(scrollv >= height*6 && scrollv < height*10){
        firstShow(portrait);
     }
     else{
        firstHide(scrollv, portrait);
     }
    if(scrollv >= height*12 && scrollv < height*16){
       secondShow(portrait);
    }
    else{
       secondHide(scrollv,portrait);
    }
    if(scrollv >= height*18 && scrollv < height*22){
        thirdShow(portrait);
    }
     else{
        thirdHide(scrollv, portrait);
    }
    if(scrollv >= height*24 && scrollv < height*28){
        forthShow(portrait);
    }
     else{
        forthHide(scrollv, portrait);
    }
    if(scrollv >= height*30 && scrollv < height*36){
        fifthShow(portrait);
    }
    else{
        fifthHide(scrollv, portrait);
    }
    if(scrollv >= height*36 && scrollv < height*42){
        sixthShow(portrait);
    }
    else{
        sixthHide(scrollv, portrait);
    }
    if(scrollv >= height*42 && scrollv < height*46){
        seventhShow(portrait);
    }
    else{
        seventhHide(scrollv, portrait);
    }
    if(scrollv >= height*48){
        eighthShow(portrait);
    }
    else{
        eighthHide(scrollv, portrait);
    }
    current_scroll = scrollv;
});

// <!--menubar function-->
    // <script>
        function hamburgerbar() {
            var x = document.getElementById("menubar");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    // </script>

    // <!--rotate hamberger-->
    // <script>
        var count = 0;
        function rot(e) {
            count++;
            if (count%2 == 1) {
                var deg = 135;
                e.style.transform = "rotate(" + deg + "deg)";
            }
            else {
                var deg = 0;
                e.style.transform = "rotate(" + deg + "deg)";
            }
        }
    // </script>


    window.addEventListener("orientationchange", function() {
        location.reload();
      }, false)
