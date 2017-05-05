function Pokemon(nombre,color,poderDeAtaque){
	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad=0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon= function(){
		return("Hola, soy " + this.nombre + ", mi color es " + this.color + " y mi poder de ataque es " + this.poderDeAtaque)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}


const pokeDex=[];
const arena=[];

	const Pikachu = new Pokemon("Pikachu","amarillo",100);
	pokeDex.push(Pikachu);
	const Charmander = new Pokemon("Charmander","rojo",20);
	pokeDex.push(Charmander);
	const Squartle = new Pokemon("Squartle","celeste",70);
	pokeDex.push(Squartle);
	const Chanchicornio = new Pokemon("Chanchicornio","rosa",1000);
	pokeDex.push(Chanchicornio);
//---------------------------------------------------------------

Pikachu.atacar(Charmander);
conole.log(Charmander.vida);


//imprimir en pantalla ----------------


//mostrar player 1
function imprimirP1(){
    var valor1=document.getElementById("play1").value;
    var mostrar1=document.getElementById("imp1");


    pokeDex.forEach(function(valor){
    	if (valor1==valor.nombre){
    		return mostrar1.innerHTML=valor.mostrarPokemon();
    	}else{"Escoge un pokemon"}
    	
    })
    
}
imprimirP1();


//mostrar player 2
function imprimirP2(){
    var valor2=document.getElementById("play2").value;
    var mostrar2=document.getElementById("imp2");

    pokeDex.forEach(function(valor){
    	if (valor2==valor.nombre){
    		return mostrar2.innerHTML=valor.mostrarPokemon();
    	}else{"Escoge un pokemon"}
    	
    })
}
imprimirP2();


function pelear(){
	var player1=document.getElementById("play1").value;
	var player2=document.getElementById("play2").value;

	pokeDex.forEach(function(valor){
		if (player1==valor.nombre) {
			arena.push(pokeDex[valor]);
		}
	});

	arena[0].atacar(arena[1]);

	document.getElementById("resultadoPelea").innerHTML=arena.length;
}
pelear();
