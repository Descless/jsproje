var cnvs = document.getElementById("arayuz");
var ic = cnvs.getContext("2d");

// karakter resim, ses

var bg = new Image();
var kses = new Audio();
var isaret = new Image();
kses.src = "ses/efekt.mp3"
bg.src = "resim/bg.png"
isaret.src="resim/isaret.png"

// değişkenler
var karakterler = 'ASDW';
var skor = 0;
var skorTus = karakterler.charAt(Math.random()*4);
var can = 3;
var isX =-100;

// sahne oluşturulması
function ciz(){


    //resimlerin ekranda gösteriyor
    ic.drawImage(bg,0,0);
    ic.drawImage(isaret,isX,280);

    //Tuşa göre ekrandaki resmi değiştiriyor

    //Skoru ve kalan canı ekranda gösteriyor
    ic.fillStyle = "#000";
    ic.font = "20px Verdana";
    ic.fillText("Score : "+skor,15,45);
    ic.fillText("Kalan can: "+can,412,45);

    //Can 0 olursa oyun bitiyor ve fonksiyon duruyor
    if(can==0){
        alert("Oyun bitmistir. Yeniden Baslamak icin R tusuna basin.")
        return;
    }

    requestAnimationFrame(ciz);

}


// basılan tuşu bir değişkene atıyor
document.addEventListener("keydown", function(e) {
    var tus = String.fromCharCode(event.keyCode || event.which);

    tusdegistir(timer,tus);

    //yanlış tuşa basılırsa canı azaltıyor, R'ye basılırsa oyunu yeniliyor
    if(tus=="R"){
        location.reload();
    }
    else if(tus!=skorTus) {
        can--;
        if (can<0)
        can=0;
    }


  });


//sayaç, 1'den 3'e kadar sayıp tuşu değiştiriyor
var x = setInterval(function() {
    var timer = new Date().getSeconds()%3+1;
    tusdegistir(timer,tus);

    //Hangi tuşa basılması gerektiğine göre işaretin konumunu ayarlıyor, basılmaması gerektiği zamanda görünmeyecek bir yere konumluyor
    if(timer==3){
        if(skorTus=="A")
        isX=15;
        else if(skorTus=="S")
        isX=150;
        else if(skorTus=="D")
        isX=290;
        else
        isX=432;
        }
    else
    isX=-150;
}, 1000)


function tusdegistir (timer, tus){
   
//Basılan tuş doğruysa skoru yükseltiyor ve tuşu değiştiriyor
    if (tus==skorTus){
        kses.play();
        skor++;
        skorTus = karakterler.charAt(Math.random()*4);
        zamanAyarla();}

    //Süre 1'e geldiğinde tuşu değiştiriyor
    if (timer == 1) {
        skorTus = karakterler.charAt(Math.random()*4);
    }
    
}

ciz();
