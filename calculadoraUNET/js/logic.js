function aceptar() {

		var select = parseInt(document.getElementById('seleccion').value);
		var capa = document.getElementById("flujo");
		var elemento = document.getElementById("botonaceptar");
		var input, input2, label, label2, diva, divb, titulo, spana, spanb;
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
			
			titulo = document.createElement('h3');
			titulo.innerHTML = "Parcial "+(i+1);
			capa.appendChild(titulo);
			divx = document.createElement('div');
			diva = document.createElement("div");
			divy = document.createElement("div");
			divb = document.createElement("div"); 
			input = document.createElement("input");
			label = document.createElement("label");
			input2 = document.createElement("input");
			label2 = document.createElement("label");
			spana = document.createElement('span');
			spanb = document.createElement('span');
			
			
			input.setAttribute("id","input"+(i+1));
			input.className = "form-control";
			input2.setAttribute("id","input"+(i+1));
			input2.className = "form-control";
			divx.className = "form-group col-lg-6";
			divy.className = "form-group col-lg-6";
			diva.className = "input-group";
			divb.className = "input-group";
		
			spana.className = "input-group-addon";
			spanb.className = "input-group-addon";
			spana.innerHTML = "Nota: 1-100";
			spanb.innerHTML = "Porcentaje: %";
			input.setAttribute('aria-describedby','sizing-addon1');
			input.setAttribute('type','number');
			input2.setAttribute('aria-describedby','sizing-addon1');
			input2.setAttribute('type','number');
			
			diva.appendChild(spana);
			diva.appendChild(input);
			divx.appendChild(diva);
			capa.appendChild(divx);

			divb.appendChild(spanb);
			divb.appendChild(input2);
			divy.appendChild(divb);
			capa.appendChild(divy);
			//capa.appendChild(divb);
		
		}

			div = document.createElement('div');
			div.className = 'form-group';
			calcular.setAttribute('onclick','calculos('+select+')');
			div.appendChild(calcular);
			capa.appendChild(div);
			
			div = document.createElement('div');
			div.className = 'form-group';
			volver.setAttribute('onclick','document.location="index.html"');

			div.appendChild(volver);
			capa.appendChild(div);
		
}

function calculos(parciales) {
	alert("Parciales: "+parciales);
	/*
	*	Tomar los valores de los input de notas y validar que 100>=notas>0.
	*	Los valores de los porcentajes sumados debe ser =100.
	*	Si los valores son incorrectos no volver a inicio sino poner el los inputs
		los valores incorrectos (en rojo si es posible)
	*	Si todo bien, hacer calculos.
	*/

	for (var i = 0; i < parciales; i++) {
		if (true) {}
	}
}
