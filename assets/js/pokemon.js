function Pokemon(nombre,color,poderDeAtaque){
	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad=0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon= function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

const Pikachu = new Pokemon("Pikachu","amarillo",100);
const Charmander = new Pokemon("Charmander","rojo",20);

//---------------------------------------------------------------

Pikachu.atacar(Charmander);
console.log(Charmander.vida);

//imprimir en pantalla ----------------

//mostrar player 1
function imprimirP1(){
    var valor1=document.getElementById("play1").value;
    var mostrar1=document.getElementById("imp1");
    mostrar1.innerHTML="Has elegido a " + valor1;
}

//mostrar player 2
function imprimirP2(){
    var valor2=document.getElementById("play2").value;
    var mostrar2=document.getElementById("imp2");
    mostrar2.innerHTML="Has elegido a " + valor2;
}

//boton que hace todo
function pelear(jugador1,jugador2){
	var seleccion1=document.getElementById("play1").value;
	var seleccion2=document.getElementById("play2").value;

	seleccion1 =
	jugador1.atacar(jugador2);

	var tablaResult=document.getElementById("resultadoPelea");
	tablaResult.innerHTML= jugador1.name + " ataca con " + jugador1.poderDeAtaque;
}
