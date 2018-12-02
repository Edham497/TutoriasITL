function $(id){
  return document.querySelector(id);
}

//crea un objeto y lo devuelve
function crearTitulo(clase, titulo){
  var title = document.createElement("div");
  var txt = document.createTextNode(titulo);
  title.className = clase;
  title.appendChild(txt);
  return title;
}

//no generico
function initLista(contenedor, titulo){
  var list = document.createElement("div");
  /*var title = document.createElement("div");
  var txt = document.createTextNode(titulo);
  title.className = "title";
  title.appendChild(txt);*/
  var title = crearTitulo('title', titulo);
  list.appendChild(title);
  list.className = "lista ham-darkblue";
  $(contenedor).appendChild(list);
}

//Generico
function insetarElemento(contenedor, tipo, clase, texto){
  var nodo = document.createElement(tipo);                //se crea el contenedor respecto al parametro "tipo";
  var info = document.createTextNode(texto);              //crea un nodo;
  nodo.appendChild(info);                                 //agrega texto al nodo;
  nodo.className = clase;                                 //agrega una clase respecto al parametro "clase":
  $(contenedor).appendChild(nodo);                        //se agrega el elemento al contenedor
}

function crearNota(contenedor, textbox, tipo, clase) {
  var nodo = document.createElement(tipo);                //se crea el contenedor respecto al parametro "tipo";
  var info = document.createTextNode($(textbox).value);
  nodo.appendChild(info);                                 //agrega texto al nodo;
  nodo.className = clase;                                 //agrega una clase respecto al parametro "clase":
  nodo.addEventListener('click',function(){
    nodeFadeout(nodo);
  });
  $(contenedor).appendChild(nodo);
}

//Generico
function eliminarElemento(contenedor){
  var list = $(contenedor);
  if(list.childNodes.length>0){
    list.removeChild(list.childNodes[list.childNodes.length-1]);
  }
}

function crearWidget(){
  insetarElemento($('#CONTENEDOR').value,$('#TIPO').value,$('#CLASE').value,$('#TEXTO').value.toString());
}
