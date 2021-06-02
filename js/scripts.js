var tf=0;
var tf2=0;
var xhr=new XMLHttpRequest();
var urls= [];
var slideUrl=[];
var slidePhotos=[];
var mePlease=[];
var please=[];
var time=5000;
var $time=5;
var $timeFade=$time*.25;
var timer;
var j;
var iii=false;
var jjj=false;
var lll=false;
var kkk=false;
var mmm=false;
var nnn=false;
var kitchCard=document.getElementById("kitchen");
var bathSlide=document.getElementById("bathroom");
var ecSlide=document.getElementById("eC");
var kitchPoly=document.getElementById("kitchenPoly1");
var timeoutI;
var timeoutII;
var timeoutIII;
var timeoutIV;
var timeoutV;


urls[0]="kitchenSlide/k";
urls[1]="bathSlide/b";
urls[2]="ecSlide/e";





$(document).ready(function(){
    document.getElementById("blicky").onclick=function() {
        if (tf==0){
            document.getElementById("blickyL2").style.animation=document.getElementById("blickyL2").dataset.anime+" "+document.getElementById("blickyL2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyL3").style.animation=document.getElementById("blickyL3").dataset.anime+" "+document.getElementById("blickyL3").dataset.time+"ms forwards ease-in";
            document.getElementById("text1").style.animation=document.getElementById("text1").dataset.anime+" "+document.getElementById("text1").dataset.time+"ms forwards ease-in";
            tf=1;
        } else {
            tf=0;
            document.getElementById("blickyL2").style.animation=document.getElementById("blickyL2").dataset.anime+"1 "+document.getElementById("blickyL2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyL3").style.animation=document.getElementById("blickyL3").dataset.anime+"1 "+document.getElementById("blickyL3").dataset.time+"ms forwards ease-in";
            document.getElementById("text1").style.animation=document.getElementById("text1").dataset.anime+"1 "+document.getElementById("text1").dataset.time+"ms forwards ease-in";
        }
    }
    document.getElementById("blicky2").onclick=function() {
        if (tf2==0){
            document.getElementById("blickyR2").style.animation=document.getElementById("blickyR2").dataset.anime+" "+document.getElementById("blickyR2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyR3").style.animation=document.getElementById("blickyR3").dataset.anime+" "+document.getElementById("blickyR3").dataset.time+"ms forwards ease-in";
            document.getElementById("text2").style.animation=document.getElementById("text2").dataset.anime+" "+document.getElementById("text2").dataset.time+"ms forwards ease-in";
            tf2=1;
        } else {
            tf2=0;
            document.getElementById("blickyR2").style.animation=document.getElementById("blickyR2").dataset.anime+"1 "+document.getElementById("blickyR2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyR3").style.animation=document.getElementById("blickyR3").dataset.anime+"1 "+document.getElementById("blickyR3").dataset.time+"ms forwards ease-in";
            document.getElementById("text2").style.animation=document.getElementById("text2").dataset.anime+"1 "+document.getElementById("text2").dataset.time+"ms forwards ease-in";

        }
    }
    document.getElementById("blicky3").onclick=function() {
        if (tf==0){
            document.getElementById("blickyL4").style.animation=document.getElementById("blickyL4").dataset.anime+" "+document.getElementById("blickyL4").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyL5").style.animation=document.getElementById("blickyL5").dataset.anime+" "+document.getElementById("blickyL5").dataset.time+"ms forwards ease-in";
            document.getElementById("text3").style.animation=document.getElementById("text3").dataset.anime+" "+document.getElementById("text3").dataset.time+"ms forwards ease-in";
            tf3=1;
        } else {
            tf3=0;
            document.getElementById("blickyL4").style.animation=document.getElementById("blickyL4").dataset.anime+"1 "+document.getElementById("blickyL4").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyL5").style.animation=document.getElementById("blickyL5").dataset.anime+"1 "+document.getElementById("blickyL5").dataset.time+"ms forwards ease-in";
            document.getElementById("text3").style.animation=document.getElementById("text3").dataset.anime+"1 "+document.getElementById("text3").dataset.time+"ms forwards ease-in";
        }
    }
    
});
if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", afterLoaded);
} else {
    afterLoaded();
}
function afterLoaded() {
    slideShow();
}








function slideShow() {
    for (i=0; i<urls.length; i++) {
        urls[i]=window.location.origin+window.location.pathname+"/resources/"+urls[i];
        for (j=0; j<1000; j++) {
            kj=j+1;
            url=""+urls[i]+""+kj+".webp";
            xhr.open("HEAD",url,false);
            xhr.send();
            if (xhr.status !== 404){
                slideUrl[j]=url;
            } else {
                j=1001;
                slidePhotos[i]=slideUrl;
                slideUrl=[];
            }
        }
    }
}
function hug(you, me) {
    for (let y=0, len=you.length; y<len; y++){
        me.push(you[y]);
    }
    return me;
}





function actualAnimations(element){
    Promise.resolve(element)
        .then(prepareAnime)
        .then(playAnime);
    
}
function actualAnimationsL(element){
    Promise.resolve(element)
        .then(prepareAnime)
        .then(playAnime2)
}
var anime ={
    slideR: (element, done)=>{
        TweenMax.set(element, {autoAlpha: 0, translateX: "50vw"});
        TweenMax.to(element, 1, {autoAlpha: 1, translateX:"0vw"});
    },
    slideL: (element, done)=>{
        TweenMax.set(element, {autoAlpha: 0, translateX: "-50vw"});
        TweenMax.to(element, 1, {autoAlpha: 1, translateX:"0vw"});
    }
}
function animate(element, animation){
    return new Promise(resolve => animation(element, resolve));
}
async function playAnime(element){
    await animate(element, anime.slideR);
}
async function playAnime2(element){
    // console.log("Play");
    await animate(element, anime.slideL);
}
function prepareAnime(element){
    TweenMax.to(element, {clearProps: "animation"});
    return element;
}




async function slideRight(urlPath, element, i) {
    if (iii || kkk || mmm) {
        const lgnth=urlPath.length-1;
        if (i==lgnth) {
            i=0;
        }
        if (typeof urlPath[i] != "undefined") {
            // console.log(element[0])
            element[0].target.style.backgroundImage="url("+urlPath[i]+")";
        }
        if (i<urlPath.length) {
            i++;
            if (element[0].target==kitchCard){
                timeoutI=setTimeout(slideRight, time, urlPath, element, i);
                actualAnimations(element[0].target);
            }
            if (element[0].target==bathSlide) {
                // console.log("Missile missed")
                // console.log(element[0].target)
                timeoutII=setTimeout(slideRight, time, urlPath, element, i);
                actualAnimationsL(element[0].target);
            }
            if(element[0].target==ecSlide) {
                console.log("work plz");
                console.log("\t\tI:\t\t\t"+i);
                timeoutIII=setTimeout(slideRight, time, urlPath, element, i);
                actualAnimations(element[0].target);
            }
            

        } else {
        }
    }
    
}









const opts={
    root: null,
    threshold: .5,
    rootMargin: "0%"
}
const optsII={
    root: null,
    threshold: 0,
    rootMargin: "0%"
}
observerBath = new IntersectionObserver((entry) =>{
    
    if (entry[0].target==bathSlide && lll && !kkk) {
        kkk=true;
        // console.log("\t\tMarking Target");
        // console.log(slidePhotos[1]);
        slideRight(slidePhotos[1], entry, 0);
    } else {
        lll=true;
    }
    
}, opts);
observerBathII = new IntersectionObserver((entry) => {
    if (jjj) {
        window.clearTimeout(timeoutII);
        kkk=false;
    }
}, optsII);
observer = new IntersectionObserver((entry) =>{
    if (entry[0].target==kitchCard && jjj && !iii) {
        iii=true;
        slideRight(slidePhotos[0], entry, 0);
    } else {
        jjj=true;
    }
    
}, opts);
observerII = new IntersectionObserver((entry) => {
    if (jjj) {
        // console.log("\t\t\t!!!\t\tCLEAR\t\t!!!")
        window.clearTimeout(timeoutI);
        iii=false;
    }
}, optsII);
observerEC = new IntersectionObserver((entry) =>{
    if (entry[0].target==ecSlide && nnn && !mmm) {
        mmm=true;
        console.log(slidePhotos[2]);
        console.log(slideRight);
        slideRight(slidePhotos[2], entry, 0);
    } else {
        nnn=true;
    }
    
}, opts);
observerECII = new IntersectionObserver((entry) => {
    if (nnn) {
        // console.log("\t\t\t!!!\t\tCLEAR\t\t!!!")
        window.clearTimeout(timeoutIII);
        mmm=false;
    }
}, optsII);


observerEC.observe(ecSlide);
observerECII.observe(ecSlide);
observerBath.observe(bathSlide);
observerBathII.observe(bathSlide);
observer.observe(kitchCard);
observerII.observe(kitchCard);