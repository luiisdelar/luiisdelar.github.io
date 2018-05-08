function enfermedad() {

	var capa = document.getElementById("flujo");
	var titulo = document.createElement("h4");
	var diva = document.createElement("div");
	var divb = document.createElement("div");
	var spana = document.createElement("span");
	var inputa = document.createElement("input");
	var spanb = document.createElement("span");
	var inputb = document.createElement("input");
	var spanc = document.createElement("span");
	var inputc = document.createElement("input");
	var divaa = document.createElement("div");
	var divbb = document.createElement("div");


	inputa.setAttribute("type","text");
	inputa.className = "form-control";
	inputa.setAttribute("placeholder","-medicamento-");
	inputa.setAttribute("aria-describedby","basic-addon1");
	inputa.setAttribute("name","a1");

	spana.className = "input-group-addon";
	spana.setAttribute("id","basic-addon1");
	spana.innerHTML = "Medicamento prescrito:";

	diva.className = "form-group";
	divb.className = "input-group";

	titulo.innerHTML = 'Enfermedad:';

	divb.appendChild(spana);
	divb.appendChild(inputa);
	diva.appendChild(divb);
	capa.appendChild(titulo);
	capa.appendChild(diva);

	//-------------------------

	inputb.setAttribute("type","text");
	inputb.className = "form-control";
	inputb.setAttribute("placeholder","-medico que prescribe-");
	inputb.setAttribute("aria-describedby","basic-addon1");
	inputb.setAttribute("name","a1");

	spanb.className = "input-group-addon";
	spanb.setAttribute("id","basic-addon1");
	spanb.innerHTML = "Medico que prescribe:";

	divaa.className = "form-group";
	divbb.className = "input-group";

	divbb.appendChild(spanb);
	divbb.appendChild(inputb);
	divaa.appendChild(divbb);
	capa.appendChild(divaa);

	//--------------------------

	var divt = document.createElement("div");
	var divter = document.createElement("div");
	var spanter = document.createElement("span");
	var inputer = document.createElement("input");

	inputer.setAttribute("type","file");
	inputer.className = "btn btn-default";
	inputer.setAttribute("aria-describedby","basic-addon1");
	inputer.setAttribute("name","a1");

	spanter.className = "input-group-addon";
	spanter.setAttribute("id","basic-addon1");
	spanter	.innerHTML = "Receta Medica:";

	divt.className = "form-group";
	divter.className = "input-group";

	divter.appendChild(spanter);
	divter.appendChild(inputer);
	divt.appendChild(divter);
	capa.appendChild(divt);

}

function prueba() {
	alert("Registro en construccion");
}