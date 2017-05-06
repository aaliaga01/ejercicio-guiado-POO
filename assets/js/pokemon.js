function Pokemon(nombre,color,poderDeAtaque,vida){
	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad=0;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon= function(){
		return("Hola, soy " + this.nombre + ", mi color es " + this.color + ", mi poder de ataque es " + this.poderDeAtaque
			+ " y mi vida es " + this.vida)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

const pokeDex=[];

	const Pikachu = new Pokemon("Pikachu","amarillo",100,250);
	pokeDex.push(Pikachu);
	const Charmander = new Pokemon("Charmander","rojo",20,220);
	pokeDex.push(Charmander);
	const Squartle = new Pokemon("Squartle","celeste",70,220);
	pokeDex.push(Squartle);
	const Chanchicornio = new Pokemon("Chanchicornio","rosa",1000,1100);
	pokeDex.push(Chanchicornio);

//---------------------------------------------------------------
/* Ejercicio Guiado.-
Pikachu.atacar(Charmander);
console.log(Charmander.vida);
*/
//---------------------------------------------------------------

//imprimir en pantalla ----------------
//mostrar player 1
function imprimirP1(){
    var valor1=document.getElementById("play1").value;
    var mostrar1=document.getElementById("imp1");


    pokeDex.forEach(function(valor){
    	if (valor1==valor.nombre){
    		return mostrar1.innerHTML=valor.mostrarPokemon();
    	}else{"Escoge un pokemon"}
    	
    });
    
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
    	
    });
}
imprimirP2();

//Boton de pelear
function pelear(){
	var player1=document.getElementById("play1").value;
	var player2=document.getElementById("play2").value;

	var poke1=pokeDex.filter(function(valor){
		return valor.nombre == player1;
		})[0];

	var poke2=pokeDex.filter(function(valor){
		return valor.nombre == player2;
		})[0];

	if(poke1 === poke2){
		alert("No puedes pelear contra el mismo pokemon");
	}else if (poke2.vida <= 0){
			poke2.vida=0;
			alert(poke2.nombre + " ha sido derrotado ¡" + poke1.nombre + " ha ganado!");

		}

	poke1.atacar(poke2);

	var resultado=document.getElementById("resultadoPelea");
	resultado.innerHTML= poke1.nombre + " atacó a " + poke2.nombre + "<br/>" + poke2.nombre + " tiene una vida de " + poke2.vida;
}
pelear();
