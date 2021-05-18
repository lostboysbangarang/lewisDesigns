var tf=0;
var xhr=new XMLHttpRequest();
var urls= [];
var slideUrl=[];
var slidePhotos=[];
var mePlease=[];
var please=[];
var time=5000;
var timer;
var j;
const kitchCard=document.getElementById("kitchen");



urls[0]="kitchenSlide/k";






$(document).ready(function(){
    document.getElementById("blicky").onclick=function() {
        if (tf==0){
            document.getElementById("blickyL2").style.animation=document.getElementById("blickyL2").dataset.anime+" "+document.getElementById("blickyL2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyL3").style.animation=document.getElementById("blickyL3").dataset.anime+" "+document.getElementById("blickyL3").dataset.time+"ms forwards ease-in";
            tf=1;
        } else {
            tf=0;
            document.getElementById("blickyL2").style.animation=document.getElementById("blickyL2").dataset.anime+"1 "+document.getElementById("blickyL2").dataset.time+"ms forwards ease-in";
            document.getElementById("blickyL3").style.animation=document.getElementById("blickyL3").dataset.anime+"1 "+document.getElementById("blickyL3").dataset.time+"ms forwards ease-in";

        }
        
        console.log("fuick");
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
        urls[i]=window.location.origin+"/resources/"+urls[i];
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
async function slideRight(urlPath, i) {
    // console.log("URL Path:");
    console.log(urlPath);
    console.log(urlPath[0].length);
    if (i==urlPath[0].length) {
        // console.log("URL path length:     "+urlPath);
        i=0;
    }
    if (typeof urlPath[0][i] != "undefined") {
        console.log("Help me:     ");
        console.log(kitchCard);
        document.getElementById("kitchen").style.backgroundImage="url("+urlPath[0][i]+")";
        kitchCard.style.animation="slideRight "+time+"ms ease-out forwards";
    }
    if (i<urlPath[0].length) {
        i=i+1;
        setTimeout(slideRight, time, urlPath, i);
    } else {
        i=0;
        slideRight(urlPath, i);
    }
}
