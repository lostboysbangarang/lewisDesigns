var tf=0;








// window.onload = lessGo();

// function lessGo() {
//     FFS();
// }

// funtion FFS() {
//     const itatchi= document.querySelectorAll(".animeL1");

// }


// funtion close(){
//     if (tf==0) {
//         document.getElementById("blicky")
//     }
//     console.log("fuck");
// }

// $(".blicky").onClick(function() {
//     if (tf==0) {
//         $(".animeL2").animate({left: "-=10vw"})
//     }
// })
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
