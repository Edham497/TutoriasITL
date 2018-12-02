function $(elemento){
    return document.querySelector(elemento);
}
function msgBienvenida(texto){
    var element = document.createElement("div");
    element.appendChild(document.createTextNode(texto));
    element.className = "msgBienvenida";
    return element;
}
function showMSGB(contenedor, MSGB){
    var dspObj = document.createElement("div");
    dspObj.appendChild(MSGB);
    dspObj.className = "dspMSG";
    $(contenedor).appendChild(dspObj);
}
function fadeOut(elemento){
    var x = $(elemento);
  	x.style.transition=".5s";
    setTimeout(function(){
        x.childNodes[0].style.color = "transparent";
        x.childNodes[0].style.padding = "0";
        x.childNodes[0].style.width = "50px";
    },2500);
    setTimeout(function(){
        x.style.transform="translateY(100px)";},3300);
    setTimeout(function(){
        x.style.opacity="0";
        x.style.marginBottom="-270px";
    },3500);
    setTimeout(function(){x.style.display="none";}, 3800);
}
function main(){
    showMSGB("body", msgBienvenida("Bienvenido $User"));
    setTimeout(function(){fadeOut(".dspMSG");},1500);
}