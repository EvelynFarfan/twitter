window.addEventListener("load", function() {
		var boton = document.getElementById("boton");
		var textoInput = document.getElementById("textoInput");
		var numCaratMax = 140;
		var contador = document.getElementById("counter");
		contador.innerHTML = 140;
		boton.disabled = true;

		boton.addEventListener("click", function(e){
			// e.preventDefault();
			var publicacion = document.createElement("p");
			publicacion.classList.add("publicacion");
			publicacion.innerHTML = textoInput.value;
			var contenido = document.getElementById("mensaje");
			contenido.insertBefore(publicacion, contenido.childNodes[0]);
			document.getElementById("textoInput").value = "";
			contador.innerHTML = 140;
			boton.disabled = true;
		});

		textoInput.addEventListener("keyup", function(){
			boton.disabled = false;
			var numCarat = textoInput.value.length;
			contador.innerHTML = numCaratMax - numCarat;
			if(numCarat === 0){
				boton.disabled = true;
			}
		});
	});





