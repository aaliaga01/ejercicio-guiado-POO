function Pokemon(nombre,color,podeDeAtaque){
	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad=0;
	this.vida = 0;
	this.podeDeAtaque = podeDeAtaque;

	this.mostrarPokemon= function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.podeDeAtaque;
	}
}

var Pikachu = new Pokemon("Pikachu","amarillo",100);
var Charmander = new Pokemon("Charmander","rojo",20);

Pikachu.atacar(Charmander);

console.log(Charmander.vida);