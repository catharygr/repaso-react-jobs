// let saludo = document.querySelectorAll(".saludo");
// console.log(saludo);

// for (let i = 0; i < saludo.length; i++) {
//   saludo[i].innerHTML = "Hola Mundo";
// }

// let saludo = document.querySelectorAll(".saludo");
// console.log(saludo);

// for (let i = 0; i < saludo.length; i++) {
//   saludo[i].innerHTML = "Hola Mundo";

//   // Crear un nuevo botón
//   let boton = document.createElement("button");
//   boton.innerHTML = "Haz clic en mí";

//   // Agregar evento clic al botón
//   boton.addEventListener("click", function () {
//     alert("Hola. soy yo");
//   });

//   // Agregar el botón al elemento saludo[i]
//   saludo[i].appendChild(boton);
// }

// let saludo = document.querySelectorAll(".saludo");

// for (let i = 0; i < saludo.length; i++) {
//   saludo[i].innerHTML = "Hola Mundo";

//   // Crear una nueva <p...> etiqueta
//   let parrafo = document.createElement("p");
//   parrafo.innerHTML = "Hola Mundo";

//   // Crear un nuevo botón
//   let boton = document.createElement("button");
//   boton.innerHTML = "Haz clic en mí";

//   // Crear un nuevo modal
//   let modal = document.createElement("div");
//   modal.style.display = "none"; // El modal inicialmente está oculto
//   modal.style.position = "fixed"; // El modal se posiciona en el centro de la pantalla
//   modal.style.zIndex = "1"; // El modal se muestra encima de todo lo demás
//   modal.style.left = "0";
//   modal.style.top = "0";
//   modal.style.width = "100%"; // El modal ocupa todo el ancho de la pantalla
//   modal.style.height = "100%"; // El modal ocupa todo el alto de la pantalla
//   modal.style.overflow = "auto"; // Si el contenido del modal es demasiado grande, se muestra una barra de desplazamiento
//   modal.style.backgroundColor = "rgba(0,0,0,0.4)"; // El fondo del modal es semi-transparente

//   // Crear el contenido del modal
//   let modalContent = document.createElement("div");
//   modalContent.style.backgroundColor = "#fefefe";
//   modalContent.style.margin = "15% auto"; // El contenido del modal se centra en la pantalla
//   modalContent.style.padding = "20px";
//   modalContent.style.border = "1px solid #888";
//   modalContent.style.width = "80%"; // El contenido del modal ocupa el 80% del ancho del modal

//   // Agregar un mensaje al contenido del modal
//   modalContent.innerHTML = "Ciérrame";

//   // Agregar el contenido al modal
//   modal.appendChild(modalContent);

//   // Agregar el modal al documento
//   document.body.appendChild(modal);

//   // Agregar un controlador de eventos de clic al botón
//   boton.addEventListener("click", function () {
//     modal.style.display = "block"; // Mostrar el modal cuando se haga clic en el botón
//   });

//   // Agregar un controlador de eventos de clic al modal
//   modal.addEventListener("click", function () {
//     modal.style.display = "none"; // Ocultar el modal cuando se haga clic en él
//   });

//   // Agregar el botón al elemento saludo[i]
//   saludo[i].appendChild(boton);
//   saludo[i].appendChild(parrafo);
// }

// Llamada a la función antes de su declaración
miFuncion(); // Esto funcionará debido al hoisting

function miFuncion() {
  console.log("¡Hola, mundo!");
}

// Pero si intentamos hacer lo mismo con una función expresada, obtendremos un error

var miFuncionExpresada = function () {
  console.log("¡Hola, mundo!");
};
miFuncionExpresada(); // Esto dará un error

async function obtenerDatos() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    let data = await response.json();

    for (let pokemon of data.results) {
      let pokemonResponse = await fetch(pokemon.url);
      let pokemonData = await pokemonResponse.json();

      let abilities = pokemonData.abilities
        .map((ability) => ability.ability.name)
        .join(", ");
      console.log(abilities);

      let div = document.querySelector("#resultado");
      div.innerHTML += `Nombre: ${pokemonData.name} <br> Habiliades: ${abilities}`;
    }
  } catch (error) {
    let div = document.querySelector("#resultado");
    div.innerHTML = `Error: ${error.message}`;
  }
}

obtenerDatos();
