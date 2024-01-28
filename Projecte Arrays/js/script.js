
let arrayObjecto=[];
let pokemons=[];
let municipis=[];
let meteorites=[];
let movies=[];
let fila=[];

propiedadesPoke = ["id", "img", "name", "weight"];
propiedadesMuni = ["ine", "municipi_nom", "altitud"];
propiedadesMovies = ["title", "year", "genres", "rating"];
propiedadesMeteo = ["id", "name", "mass", "fall"];


document.addEventListener("DOMContentLoaded", function(){
	fetching();
})

//Hace el fetch de los datos
function fetching() {

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

                    for (let i = 0; i < 1000; i++) {
                        let singlePoke = i < pokemons.length ? {
                            "id": pokemons[i].id,
                            "img": pokemons[i].img,
                            "name": pokemons[i].name,
                            "weight": pokemons[i].weight
                          } : "-";
                        let singleMunicipi = i < municipis.length ? {
                            "ine": municipis[i].ine,
                            "nom": municipis[i].municipi_nom,
                            "altitud": municipis[i].altitud
                          } : "-";
                        let singleMovie = i < movies.length ? {
                            "title": movies[i].title,
                            "year": movies[i].year,
                            "genres": movies[i].genres,
                            "rating": movies[i].rating
                          } : "-";
                        let singleMeteorit = i < meteorites.length ? {
                            "id": meteorites[i].id,
                            "name": meteorites[i].name,
                            "mass": meteorites[i].mass,
                            "fall": meteorites[i].fall
                          } : "-";
                    
                        fila= {
                          "Pokemon": singlePoke,
                          "Municipis": singleMunicipi,
                          "Peli": singleMovie,
                          "EarthMeteorite": singleMeteorit,
                        };
                        arrayObjecto.push(fila);
                      }
                    // imprimirTablaConjunta(arrayObjecto);
                    
                  });
              });
          });
      });
  }

//   PART 0 --> imprime la tabla con los nombres de peliculas, municipios, pokemos, municipios
  function imprimirTablaConjunta(arrayObjecto){
    let arrayNombres=[];
    let filaNombres=[];
    
    for (let i = 0; i < 1000; i++) {
        let nomPoke = (arrayObjecto[i].Pokemon !== "-" ? arrayObjecto[i].Pokemon.name : "-");
        let nomMunicipi = (arrayObjecto[i].Municipis !== "-" ? arrayObjecto[i].Municipis.nom: "-");
        let nomMovie = (arrayObjecto[i].Peli !== "-" ? arrayObjecto[i].Peli.title: "-");
        let nomMeteorit = (arrayObjecto[i].EarthMeteorite !== "-" ? arrayObjecto[i].EarthMeteorite.name : "-");

      filaNombres = {
        "Pokemon": nomPoke,
        "Municipis": nomMunicipi,
        "Pel·lícules": nomMovie,
        "EarthMeteorite": nomMeteorit,
      };
      arrayNombres.push(filaNombres);
    }
    console.table(arrayNombres);
}

function reload(){
    location.reload();
}

function valorLista(opcion) {
    let datos;

	if (opcion == "pokemon") {
        datos = pokemons;
        propiedades = propiedadesPoke;
        crearTabla(datos, propiedades);	

	}else if(opcion == "municipi"){
        
        datos = municipis;
        propiedades = propiedadesMuni
        crearTabla(datos, propiedades);

    }else if(opcion == "pelicules"){
        datos = movies;
        propiedades = propiedadesMovies
        crearTabla(datos, propiedades);

    }else if(opcion == "meteorits"){
        datos = meteorites;
        propiedades = propiedadesMeteo;
        crearTabla(datos, propiedades);
    }
}

function crearTabla(datos, propiedades) {
  console.log(datos);

  //se crea la tabla
  let tabla = document.getElementById("table");
  tabla.innerHTML = "";

  // poner los títulos de las columnas
  let titulos = document.createElement("tr");
  for (let n = 0; n < propiedades.length; n++) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(propiedades[n]));
    titulos.appendChild(th);
  }
  tabla.appendChild(titulos);

  // Crear filas de la tabla
  for (let i = 0; i < datos.length; i++) {
    let fila = document.createElement("tr");

    for (let j = 0; j < propiedades.length; j++) {
      let propiedad = propiedades[j];
      let cuadrito = document.createElement("td");
      if (propiedad === "img") {
        let imagen = document.createElement("img");
        imagen.src = datos[i][propiedad];
        imagen.style.width = "50px";
        cuadrito.appendChild(imagen);
        cuadrito.style.border = "1px solid black";
        cuadrito.style.width = "150px";
        cuadrito.style.height = "25px";
        cuadrito.style.textAlign = "center";
      } else {
        cuadrito.appendChild(document.createTextNode(datos[i][propiedad]));
        cuadrito.style.border = "1px solid black";
        cuadrito.style.width = "200px";
        cuadrito.style.height = "25px";
        cuadrito.style.textAlign = "center";
      }
      fila.appendChild(cuadrito);
    }
    tabla.appendChild(fila);
  }
}


//sólo ordena la lista de los pokemons.

function orderList(valorOrdenar){
    if(valorOrdenar == "asc"){
        datos = ordernarAsc();
        crearTabla(datos, propiedadesPoke);
    }else if(valorOrdenar == "desc"){
        datos = ordenarDesc();
        crearTabla(datos, propiedadesPoke);
    }else{
        console.log("ERROR");
    }
}

function ordernarAsc(){
    let pokemosAsc = pokemons.sort((a, b) => {
        return a.id - b.id;
    });
    return pokemosAsc;
}

function ordenarDesc(){
    let pokemosDesc = pokemons.sort((a, b) => {
        return b.id - a.id; 
    });
    return pokemosDesc;
}