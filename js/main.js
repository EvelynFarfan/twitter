window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function(){
		var textoInput = document.getElementById("textoInput").value;
		var publicacion = document.createElement("div");
		publicacion.innerHTML = textoInput;
		var contenido = document.getElementById("mensaje");
		contenido.insertBefore(publicacion, contenido.childNodes[0]);
		document.getElementById("textoInput").value = "";
		});
});