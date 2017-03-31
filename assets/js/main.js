var publicacion=document.getElementById("publicacion");
var autor = document.getElementById("autor");
var mostrar=document.getElementById("mostrar");
var boton=document.getElementById("boton");

boton.addEventListener("click" , function(){
console.log("hola");
var div=document.createElement("div");
div.setAttribute("class", "impresion");
var salto=document.createElement("br");
div.innerHTML= "PUBLICACION : "  +publicacion.value + "</br>"+ "AUTOR  : "+ autor.value;
mostrar.appendChild(salto);
mostrar.prepend(salto);
mostrar.prepend(div);
});
