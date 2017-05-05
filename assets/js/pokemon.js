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
		if (player1==valor.nombre){
			var selec1=pokeDex.;
			arena.push(selec1);
		}

	})

	/*var player1=arena[0];
	var player2=arena[1];

	player1.atacar(player2);*/

	document.getElementById("resultadoPelea").innerHTML=arena.length;
}
pelear();

/*function peleaPokemon(){
        var atacante = document.getElementById('pokemon_A').value;
        var atacado = document.getElementById('pokemon_B').value; 
        // validar que no sea el mismo pokemon
        if (atacante=="Pokachu" && atacado=="Pokachu"){
            alert("No puede atacarse a sí mismo")
            return

        }
        if (atacante=="Pocky" && atacado=="Pocky"){
            alert("No puede atacarse a sí mismo")
            return
        }
        // validar que no este vacio
        if (atacante=="0" || atacado=="0"){
            alert("Escoja pokemon")
            return
        }

        var ataque = prompt('Ingrese valor de ataque');
        var pokeObj1 = new Pokemon(atacante,'rojo', ataque);
        var pokeObj2 = new Pokemon(atacado,'otro color', 40);
        pokeObj1.atacar(pokeObj2);

        atacante.innerHTML = atacante + " atacó a " + pokeObj2.nombre + " y " + pokeObj2.nombre + " tiene " + pokeObj2.vida + " de vida restante";
    }*/
