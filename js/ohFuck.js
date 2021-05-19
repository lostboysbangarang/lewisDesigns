var tf=0;
var tf2=0;
var xhr=new XMLHttpRequest();
var urls= [];
var slideUrl=[];
var slidePhotos=[];
var mePlease=[];
var please=[];
var time=3000;
var $time=5;
var $timeFade=$time*.25;
var timer;
var j;
var kitchCard=document.getElementById("kitchen");
var kitchPoly=document.getElementById("kitchenPoly1");



urls[0]="kitchenSlide/k";






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
            tf2=1;
        } else {
            tf2=0;
            document.getElementById("blickyR2").style.animation=document.getElementById("blickyR2").dataset.anime+"1 "+document.getElementById("blickyR2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyR3").style.animation=document.getElementById("blickyR3").dataset.anime+"1 "+document.getElementById("blickyR3").dataset.time+"ms forwards ease-in";

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
    // loop();
}














// TweenLite.to(kitchCard, 0, {})


// function loop() {

//     requestAnimationFrame(loop);
// }






























function slideShow() {
    for (i=0; i<urls.length; i++) {
        urls[i]=window.location.origin+window.location.pathname+"/resources/"+urls[i];
        for (j=0; j<1000; j++) {
            kj=j+1;
            url=""+urls[i]+""+kj+".png";
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
    for (i=0; i<urls.length; i++) {
        mePlease=slidePhotos[i];
        hug(mePlease, please);
    }
    // console.log(slidePhotos);
    timer=setInterval(slideRight(slidePhotos, 0), time);
}
function hug(you, me) {
    for (let y=0, len=you.length; y<len; y++){
        me.push(you[y]);
    }
    // console.log("Me:     "+me);
    return me;
}





function actualAnimations(){
    console.log("Promise");
    Promise.resolve(kitchCard)
        .then(prepareAnime)
        .then(playAnime);
    
}
function actualAnimations2(){
    Promise.resolve(kitchPoly)
        .then(prepareAnime)
        .then(playAnime2);
}
var anime ={
    slideR: (element, done)=>{
        Tween.set(element, {autoAlpha: 0, translateX: "-100vw"});
        Tween.to(element, time, {autoAlpha: 1, translateX:"0vw", onComplete: done});
    },
    slideL: (element, done)=>{
        Tween.set(element, {autoAlpha: 0, translateX: "-100vw"});
        Tween.to(element, time, {autoAlpha: 1, translateX:"0vw", onComplete: done});
    }
}
function animate(element, animation){
    return new Promise(resolve => animation(element, resolve));
}
async function playAnime(element){
    console.log("Play");
    await animate(element, anime.slideR);
}
async function playAnime2(element){
    console.log("Play");
    await animate(element, anime.slideL);
}
function prepareAnime(element){
    console.log("Prepare");
    console.log(element);
    console.log(element.style);
    TweenMax.to(element, {clearProps: "animation"});
    console.log(element.style);
    return element;
}




async function slideRight(urlPath, i) {
    // console.log("URL Path:");
    // console.log(urlPath);
    // console.log(urlPath[0].length);
    if (i==urlPath[0].length) {
        // console.log("URL path length:     "+urlPath);
        i=0;
    }
    if (typeof urlPath[0][i] != "undefined") {
        console.log("Help me:     ");
        console.log(kitchCard);
        document.getElementById("kitchen").style.backgroundImage="url("+urlPath[0][i]+")";
        kitchCard.style.animation="slideRight "+time*.05+"ms ease-out forwards";
    }
    if (i<urlPath[0].length) {
        i=i+1;
        setTimeout(slideRight, time, urlPath, i);
    } else {
        i=0;
        slideRight(urlPath, i);
    }
    actualAnimations()
    // actualAnimations2();
}

