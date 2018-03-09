function aceptar() {

		var select = parseInt(document.getElementById('seleccion').value);
		var capa = document.getElementById("flujo");
		var elemento = document.getElementById("botonaceptar");
		var input, input2, label, label2, div;
		var x = elemento.parentNode;
		var volver = document.createElement("button");
		var calcular = document.createElement("button");

		calcular.innerHTML = 'Calcular';
		volver.innerHTML = 'Volver';
		volver.className = 'form-control btn btn-primary';	
		calcular.className = 'form-control btn btn-primary';

		x.removeChild(elemento);
		elemento = document.getElementById("seleccion");
		x = elemento.parentNode;
		x.removeChild(elemento);
		elemento = document.getElementById("label1");
		x = elemento.parentNode;
		x.removeChild(elemento);

		for (var i = 0; i < select ; i++) {
		
			div = document.createElement('div'); 
			input = document.createElement("input");
			label = document.createElement("label");
			input2 = document.createElement("input");
			label2 = document.createElement("label");
			

			input.setAttribute("id","input"+(i+1));
			input.className = "form-control";
			input2.setAttribute("id","input"+(i+1));
			input2.className = "form-control";
			div.className = "form-group";
			label.innerHTML = "Parcial "+(i+1);
			label2.innerHTML = "Porcentaje ";

			div.appendChild(label);
			div.appendChild(input);
			div.appendChild(label2);
			div.appendChild(input2);				
			capa.appendChild(div);
		
		}

			div = document.createElement('div');
			div.className = 'form-group';
			div.appendChild(calcular);
			capa.appendChild(div);
			
			div = document.createElement('div');
			div.className = 'form-group';
			volver.setAttribute('onclick','document.location="index.html"');
			div.appendChild(volver);
			capa.appendChild(div);
		
}
