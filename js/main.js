window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var textoInput = document.getElementById("textoInput");
	var numCaratMax = 140;
	var contador = document.getElementById("counter");
	contador.innerHTML = 140;
	boton.disabled = true;
	boton.addEventListener("click", function(e){
		e.preventDefault();
		var publicacion = document.createElement("p");
		publicacion.classList.add("publicacion");
		publicacion.innerHTML = textoInput.value;
		var contenido = document.getElementById("mensaje");
		contenido.insertBefore(publicacion, contenido.childNodes[1]);
		document.getElementById("textoInput").value = "";
		contador.innerHTML = 140;
		boton.disabled = true;
	});
	textoInput.addEventListener('keyup', function(){
		textoInput.style.cssText = 'height:auto; padding:0';
		textoInput.style.cssText = 'height:' + textoInput.scrollHeight + 'px';
	});
	textoInput.addEventListener("keyup", function(e){
		boton.disabled = false;
		var numCarat = textoInput.value.length;
		contador.innerHTML = numCaratMax - numCarat;
		if(numCarat === 0){
			boton.disabled = true;
		}
		if(numCarat > numCaratMax){
			boton.disabled = true;
		}
		if(numCarat > 120){
			contador.style.color = "green";
		}else{
			contador.style.color = "black";
		}
		if(numCarat > 130){
			contador.style.color = "red";
		}
	});
});