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

const pokeDex=[];

const Pikachu = new Pokemon("Pikachu","amarillo",100);
pokedex.push(Pikachu);
const Charmander = new Pokemon("Charmander","rojo",20);
pokedex.push(Charmander);
const Squartle = new Pokemon("Squartle","celeste",70);
pokedex.push(Squartle);
const Chanchicornio = new Pokemon("Chanchicornio","rosa",1000);
pokedex.push(Chanchicornio);

//---------------------------------------------------------------

Pikachu.atacar(Charmander);
document.write(Charmander.vida);


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
/*function pelear(jugador1,jugador2){
	var seleccion1=document.getElementById("play1").value;
	var seleccion2=document.getElementById("play2").value;


	var resultado= seleccion1.atacar(seleccion2);

	var tablaResultado=document.getElementById("resultadoPelea");
	tablaResultado.innerHTML=resultado;
}*/
