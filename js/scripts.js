var tf=0;
var tf2=0;
var xhr=new XMLHttpRequest();
var urls= [];
var slideUrl=[];
var slidePhotos=[];
var mePlease=[];
var please=[];
var time=6000;
var $time=5;
var $timeFade=$time*.25;
var timer;
var j;
var iii=false;
var jjj=false;
var kitchCard=document.getElementById("kitchen");
var kitchPoly=document.getElementById("kitchenPoly1");
var timeoutI;
var timeoutII;
var timeoutIII;
var timeoutIV;
var timeoutV;


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
    // timer=setInterval(slideRight(slidePhotos, 0), time);
}
function hug(you, me) {
    for (let y=0, len=you.length; y<len; y++){
        me.push(you[y]);
    }
    // console.log("Me:     "+me);
    return me;
}





function actualAnimations(element){
    // console.log("Promise Element");
    // console.log(element);
    Promise.resolve(element)
        .then(prepareAnime)
        .then(playAnime);
    
}
// function actualAnimations2(){
//     Promise.resolve(kitchPoly)
//         .then(prepareAnime)
//         .then(playAnime2);
// }
var anime ={
    slideR: (element, done)=>{
        TweenMax.set(element, {autoAlpha: 0, translateX: "50vw"});
        TweenMax.to(element, 1, {autoAlpha: 1, translateX:"0vw"});
    },
    slideL: (element, done)=>{
        TweenMax.set(element, {autoAlpha: 0, translateX: "-100vw"});
        TweenMax.to(element, 1, {autoAlpha: 1, translateX:"0vw"});
    }
}
function animate(element, animation){
    return new Promise(resolve => animation(element, resolve));
}
async function playAnime(element){
    // console.log("Play");
    // console.log(element);
    await animate(element, anime.slideR);
}
async function playAnime2(element){
    console.log("Play");
    await animate(element, anime.slideL);
}
function prepareAnime(element){
    // console.log("Prepare");
    // console.log(element);
    // console.log(element);
    // console.log(element.style);
    TweenMax.to(element, {clearProps: "animation"});
    // console.log(element.style);
    return element;
}




async function slideRight(urlPath, element, i) {
    // console.log("\t\t\tSlide Start");
    // console.log("\tI:\t\t"+i);
    if (iii) {
        const lgnth=urlPath[0].length-1;
        if (i==lgnth) {
            // console.log("URL path length:     "+urlPath);
            i=0;
        }
        if (typeof urlPath[0][i] != "undefined") {
            // console.log("Help me:     ");
            // console.log(element[0]);
            element[0].target.style.backgroundImage="url("+urlPath[0][i]+")";
            // element.style.animation="slideRight "+time*.05+"ms ease-out forwards";
        }
        // console.log("URL Path:\t\t"+urlPath[0][i]);
        // console.log("URL length:\t\t"+urlPath[0].length);
        // console.log("URL Index:\t\t"+lgnth);
        if (i<urlPath[0].length) {
            // console.log("Prev I:\t\t"+i);
            i++;
            // console.log("New I:\t\t"+i);
        //     i=i+1;
            timeoutI=setTimeout(slideRight, time, urlPath, element, i);
            actualAnimations(element[0].target);

        } else {
            // i=0;
        }
        // } else {
        //     i=0;
        //     slideRight(urlPath, i);
        // }
        // actualAnimations(element);
        // actualAnimations(element);
    }
    
    // actualAnimations2();
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
observer = new IntersectionObserver((entry) =>{
    if (entry[0].target==kitchCard && jjj && !iii) {
        // console.log("\t\tMarking target Alpha");
        iii=true;
        slideRight(slidePhotos, entry, 0);
    } else {
        jjj=true;
    }
    // console.log("\t\Finding target Alpha");
    // console.log(entry[0].target);
    // window.clearTimeout(timeoutI);
    // iii=true;
    
    // timeoutI=slideRight(slidePhotos, entry, 0)
}, opts);
observerII = new IntersectionObserver((entry) => {
    if (jjj) {
        // console.log("I IntObv:\t\t"+i);
        window.clearTimeout(timeoutI);
        iii=false;
    }
}, optsII);
observer.observe(kitchCard);
observerII.observe(kitchCard);