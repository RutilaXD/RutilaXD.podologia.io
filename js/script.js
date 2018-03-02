/*
	@author: Raúl Guadarrama (c) 2018
	Función que hace los ajustes necesarios para que se muestre una animación css3 y la imagen de cabecera
	se auste al tamaño inicial de la ventana.
	*/
	function ajuste () {
	var altura = window.innerHeight; //Obtenemos la altura
	console.log("heeeeey! "+altura);
	imagen = document.getElementById('imagen'); //Obtenemos la caja imagen
	imagen.style.height = altura+"px"; //Asignamos a altura inicial
	
	h1 = document.getElementById('msginit'); //Obtenemos el título con id 'msginit' 
	//ingresamos al atributo style del título y le cambimos su visibilidad y opacidad
	h1.style.visibility = "visible";
	h1.style.opacity = "1";
	
	window.addEventListener("resize",resize); //Agregamos un evento para ajustar la altura de la imagen según se redimensione la pagina
	window.addEventListener("scroll",scroll); //Agregamos un evento para cuando se mueve el scroll
}
function resize () {
	var otraAltura = window.innerHeight; //Obtenemos la altura del navegador
	var ancho = window.innerWidth;
	console.log("ancho "+ancho);
	console.log("hoolaaa "+otraAltura);
	if(ancho<1000){console.log("asdasdasd");otraAltura= otraAltura*0.8;}
	imagen = document.getElementById('imagen'); //obtenemos la imagen
	imagen.style.height = otraAltura+"px"; //le asignamos la altura del navegador a la imagen
}

function scroll(){
	var tamanoImagen = imagen.style.getPropertyValue('height'); //Obtenemos la altura predefinida en un inicio
	if(window.scrollY >= parseInt(tamanoImagen)){ //comparamos si el scroll ha dejado atrás a la imagen
		console.log('llegaste al final de la imagen');
		
		document.getElementById('m').className = "menu-fijo"; //Cambiamos la clase del elemento html con id m
		
		arreglo = document.getElementsByClassName('option'); //obtenemos cada elemento qe tenga la clase option
		for(i = 0; i < arreglo.length; i++){ arreglo[i].style.color = "white"; } //a cada uno de los elemtno obtenidos le cambiamos el color de fuente
	}else{
		document.getElementById('m').className = "menu"; //En caso de que no se haya superado la imagen se vuelve a la clase inicial del elemento cuyo id es m
		
		arreglo = document.getElementsByClassName('option'); //volvemos a obtener los elementos con clase option
		for(i = 0; i < arreglo.length; i++){ arreglo[i].style.color = "black"; } //cambiamos el color de fuente de cada uno de ellos a negro
	}
}