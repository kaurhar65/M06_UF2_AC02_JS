//Declaracion de variables globales
let pokemons = [];
let municipis = [];
let meteorites = [];
let movies = [];
let filaInfo = [];

// POKEMONS
function imprimirTot() {
  fetch("js/data/pokemon.json")
    .then((response) => response.json())
    .then((data) => {
      pokemons = data.pokemon;

      //Fetch de municipis
      fetch("js/data/municipis.json")
        .then((response) => response.json())
        .then((data) => {
          municipis = data.elements;

          //Fetch de meteorits
          fetch("js/data/earthMeteorites.json")
            .then((response) => response.json())
            .then((data) => {
              meteorites = data;

              //Fetch de movies
              fetch("js/data/movies.json")
                .then((response) => response.json())
                .then((data) => {
                  movies = data.movies;

                  let cargarDades = [];
                  for (let i = 0; i < 1000; i++) {
                    let singlePoke =
                      i < pokemons.length ? pokemons[i].name : "-";
                    let singleMunicipi =
                      i < municipis.length ? municipis[i].municipi_nom : "-";
                    let singleMovie = i < movies.length ? movies[i].title : "-";
                    let singleMeteorit = 
					i < meteorites.length ? meteorites[i].name : "-";
                    filaInfo = {
                      "Pokemon": singlePoke,
                      "Municipis": singleMunicipi,
                      "Pel·lícules": singleMovie,
                      "EarthMeteorite": singleMeteorit,
                    };
                    cargarDades.push(filaInfo);
                  }
                  console.table(cargarDades);
                });
            });
        });
    });
}

//longitud:1000 y crear una array de objectos la clave titulo y valor onstorage.
//poner cada fetch en el then anterior.

//if la i < longitug.lenght pones el nombre, sino un guón
