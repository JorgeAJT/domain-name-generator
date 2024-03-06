/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello there");

  let pronoun = ["the", "our"];
  let adj = ["tasty", "marvelous"];
  let noun = ["skynet", "ashes"];
  let ext = [".com", ".net", ".es"];

  const showVertical = array => array.map(item => item + "<br>").join("");
  // con la funcion map() + <br> creo un nuevo array con un salto de linea en HTML y con join() elimino la coma que separa cada item del array

  document.getElementById("pronoun").innerHTML = showVertical(pronoun);
  document.getElementById("adjetive").innerHTML = showVertical(adj);
  document.getElementById("noun").innerHTML = showVertical(noun);
  document.getElementById("extension").innerHTML = showVertical(ext);

  const stringCoincidence = (stringNoun, stringExt) => {
    let newStringExt = stringExt.slice(1); // quito el punto de la extension
    if (stringNoun.endsWith(newStringExt) == true) {
      // compruebo si coincide el final del nombre con la extension sin el punto
      let newStringNoun = stringNoun.slice(0, -newStringExt.length); // si coincide creo nuevo nombre sin las ultimas letras de la extension
      return newStringNoun; // devuelvo el nuevo nombre
    } else return stringNoun; // sino coincide, devuelvo el nombre tal cual sin cambiar
  };

  // genera todos los posibles dominios

  const createDomains = () => {
    let domains = "";
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let m = 0; m < ext.length; m++) {
            let newNoun = stringCoincidence(noun[k], ext[m]);
            if (newNoun == noun[k]) {
              domains += `${pronoun[i]}${adj[j]}${newNoun}${ext[m]}<br>`;
            } else if (newNoun != noun[k]) {
              domains += `<b>${pronoun[i]}${adj[j]}${newNoun}${ext[m]}</b><br>`; // si son domain hacks, ponerlo en negrita
            }
          }
        }
      }
    }
    return domains;
  };

  // Obtén una referencia al botón por su ID
  let button = document.getElementById("generatorButton");

  // Obtén una referencia al elemento donde mostrarás los resultados
  let resultingDomains = document.getElementById("generatedDomains");

  // Asigna un manejador de eventos al botón
  button.addEventListener("click", function() {
    // Llama a la función createDomains y muestra los resultados
    resultingDomains.innerHTML = createDomains();
  });

  //TESTS

  // let newnoun = "skynet";
  // let newext = ".net";
  // let newnoun2 = "ashes";
  // let newext2 = ".es";
  // let newnoun3 = "paco";
  // // let newnoun2 = newnoun.slice(0, 3);
  // // console.log(newnoun2); // "sky"
  // console.log(stringCoincidence(newnoun, newext));

  // una funcion que verifique
  // thebigdiego.com salida thebigdiego.com
  // thebigashes.com salida thebigashes.com
  // thebigashes.es salida thebigash.es
  // thegaston.es salida thegaston.es
  // thebigqualcom.com salida thebigqual.com
};
