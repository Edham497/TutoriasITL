function $(id){return document.querySelector(id);}
//////////////////////////////////////
//  AJAX
//  Asynchronous JavaScript And XML.
function importar(documento, contenedor)
{
	var elemento = $(contenedor);
	var xhttp = (window.XMLHttpRequest)?new XMLHttpRequest():xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	//The XMLHttpRequest object sends a request to a web server
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200)
		{
			elemento.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", documento, true);
	xhttp.send();
}
//Funcion principal ue cargara todos los elementos necesarios de la pagina
function main(){
	importar('assets/head','head');
	importar('assets/login','#formularioInicio');
	importar('assets/footer','footer')
	//importar('assets/header','header');
}

function getText(elemento){
	/*var y = document.getElementById(elemento);
	var currentVal = y.value;
	return currentVal;*/
	return $(elemento).value;
}
function clearText(elemento){
	$(elemento).value = "";
}

//popUp necesita un elemento donde se pondra el mensaje y de donde obitene el mensaje
function popUp(elemento, elemento2){
	/*var x = $(elemento);
	x.innerHTML = "<ham-msg class='ham-red'>" + getTeext(elemento2) + "</ham-msg>";*/
	$(elemento).innerHTML = "<ham-msg class='col ss full ham-red'>" + getText(elemento2) + "</ham-msg>"
}

//Animacion de entrada
function fadeIn(elemento){
	var x = $(elemento);
	x.style.transition=".2s";
	x.style.display="block";
  	x.style.transform="translateY(0px)";
  	setTimeout(function(){x.style.opacity="1";}, 200);
}

//Animacion de salida
function fadeOut(elemento){
  	var x = $(elemento);
  	x.style.transition=".5s";
  	x.style.transform="translateY(100px)";
  	setTimeout(function(){x.style.opacity="0";
		x.style.marginBottom="-270px";},100);
  	setTimeout(function(){x.style.display="none";}, 500);
}

function nodeFadeout(elemento){
  	elemento.style.transition=".25s";
  	elemento.style.transform="translateX(100px)";
  	setTimeout(function(){elemento.style.opacity="0";
		elemento.style.marginBottom="-11%"},200);
  	setTimeout(function(){elemento.style.display="none";}, 500);
}

function fadeOutRev(elemento){
  	var x = $(elemento);
  	x.style.transition=".3s";
  	x.style.transform="translateY(-100px)";
  	setTimeout(function(){x.style.opacity="0";},100);
  	setTimeout(function(){x.style.display="none";}, 500);
}


/*function load(){
  var x = document.querySelector("#loadScreen");
  x.style.display="none";
}
setTimeout("load()",2000);
*/
/*function load() {
  var x = document.querySelector("#loadScreen");
	x.style.transform ="translateY(100%)";
}
setTimeout("load()",2000);*/
