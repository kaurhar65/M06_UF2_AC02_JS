			

//Declaracion de variables globales
let dades;
let pokemonsNoms = [];
let municipisNoms = [];
let meteoritesNoms = [];
let moviesNoms = [];

// POKEMONS
function datosPokemon(){
	fetch("js/data/pokemon.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.pokemon;		

		
		for(let i= 0; i<dades.length; i++){
			let pokemonNuevo = dades[i];
			let nombre = pokemonNuevo.name;
			console.log(i + " " + nombre);
			pokemonsNoms.push(nombre);
		};
		
		console.table(pokemonsNoms);
		// console.log("Array con los nombre de los pokemons: " + "br" + pokemonsNoms);
		//--> esto imprime todos los datos de pokemon.
		// console.log(dades) 
		// console.log(dades[0].name)
		// console.log(dades[0]);

	});
}

// MUNICIPIS
function datosMunicipis(){
	fetch("js/data/municipis.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.elements;		

		
		for(let i= 0; i<dades.length; i++){
			let municipi = dades[i];
			let nom = municipi.municipi_nom;
			console.log(i + " " + nom);
			municipisNoms.push(nom);
		}
		console.table(municipisNoms);
		
		// console.log(dades)
		// console.log(dades[0].municipi_nom)
	});

}

// METEORITS
function datosMeteorites() {
  fetch("js/data/earthMeteorites.json")
    .then((response) => response.json())
    .then((data) => {
      dades = data;

	  
	  for(let i=0; i<dades.length; i++){
		let meteorite = dades[i];
		let nomMeteorite = meteorite.name;
		console.log( i + " " + nomMeteorite);
		meteoritesNoms.push(nomMeteorite);
	  }
	  console.table(meteoritesNoms);
    //   console.log(dades);
    //   console.log(dades[0].name);
    });
}


// MOVIES
function datosMovies() {
  fetch("js/data/movies.json")
    .then((response) => response.json())
    .then((data) => {
      dades = data.movies;

	  
	  for(let i=0; i<dades.length; i++){
		let movie = dades[i];
		let nomMovie = movie.title;
		console.log(i + " " + nomMovie);
		moviesNoms.push(nomMovie);
	  }
	  console.table(moviesNoms);

    //   console.log(dades);
    //   console.log(dades[0].title);
    });
}



