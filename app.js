//
function crearElemAlCargar() {
  let elemento = document.createElement("div");
  document.getElementById("desdeLaCarga").appendChild(elemento);
}

window.addEventListener("DOMContentLoaded", crearElemAlCargar);

//
function crearElemConClick() {
  let elemento = document.createElement("div");
  document.getElementById("desdeLaCarga").appendChild(elemento);
}

document.getElementById("btn-1").addEventListener("click", crearElemConClick);

//
function crearElemConClick2() {
  document.getElementById("desdeLaCarga").innerHTML = "<div>Chao amigos!</div>";
}

document.getElementById("btn-2").addEventListener("click", crearElemConClick2);

//
function crearElemYcontAlCargar() {
  let elemento = document.createElement("div");

  let contenido = document.createTextNode(
    "Texto creado con createTextNode (en div creado en JS)"
  );
  elemento.appendChild(contenido);

  document.getElementById("main").appendChild(elemento);
}

window.addEventListener("DOMContentLoaded", crearElemYcontAlCargar);

//
function mostrarNuevaPagina() {
  document.getElementById("escondido").classList.toggle("mostrado");
}

document.getElementById("btn-3").addEventListener("click", mostrarNuevaPagina);
