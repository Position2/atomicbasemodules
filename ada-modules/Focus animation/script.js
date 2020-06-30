  
indicator = document.querySelector("#indicator"),
  lastelem = document.querySelector("body"),
  offset = 6,
  minSpeed = 0.3,
  pixPerSec = 500;
function moveIndicator(first, second){
   if (event.type == "blur") {  
     lastelem = event.target;
     if (document.querySelectorAll(":focus").length == 0) {
      indicator.style.opacity = 0;
     }
   } else {
     var target = event.target;
   }
  
  var currentSpeed = Math.max(Math.round((Math.sqrt(Math.pow(target.offsetLeft - indicator.offsetLeft, 2) + Math.pow(target.offsetTop - indicator.offsetTop, 2) )/pixPerSec)*100)/100, minSpeed);
 if (event.type == "focus") {
  indicator.style.transition = String(currentSpeed) + "s";

  indicator.style.width = String(target.offsetWidth + offset*2) + "px";
  indicator.style.height = String(target.offsetHeight + offset*2) + "px";
  indicator.style.left = String(target.offsetLeft - offset) + "px";
  indicator.style.top = String(target.offsetTop - offset) + "px";
  indicator.style.opacity = 1;

   window.setTimeout(function(){
     if (target.getAttribute("data-nofocustyle") == "true") {

      indicator.style.transition = String(minSpeed) + "s";
      indicator.style.opacity = 1;
      indicator.style.width = String(target.offsetWidth) + "px";
      indicator.style.height = String(target.offsetHeight) + "px";
      indicator.style.left = String(target.offsetLeft) + "px";
      indicator.style.top = String(target.offsetTop) + "px";
    }}, (currentSpeed*1000) + 50) 
  } 
}
var list = document.querySelectorAll("*");
for (var i = 0; i<list.length;i++) {
  
  console.log(list[i]);
  
  
  list[i].addEventListener('blur', moveIndicator);
  list[i].addEventListener('focus', moveIndicator);

}


