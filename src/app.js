/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adjective = ["tasty", "marvelous"];
  let noun = ["skynet", "ashes"];
  let extension = [".com", ".net", ".es"];

  const showArrayVertical = array => array.map(item => item + "<br>").join("");
  // con la funcion map() + <br> creo un nuevo array con un salto de linea en HTML y con join() elimino la coma que separa cada item del array

  document.getElementById("pronoun").innerHTML = showArrayVertical(pronoun);
  document.getElementById("adjective").innerHTML = showArrayVertical(adjective);
  document.getElementById("noun").innerHTML = showArrayVertical(noun);
  document.getElementById("extension").innerHTML = showArrayVertical(extension);

  const removeDot = domainExtension => {
    let newDomainExtension = domainExtension.slice(1); // quito el punto de la extension
    return newDomainExtension;
  };

  const generateDomainHacks = (domainNoun, domainExtension) => {
    let domainExtensionWithoutDot = removeDot(domainExtension);
    if (domainNoun.endsWith(domainExtensionWithoutDot) == true) {
      // compruebo si coincide el final del nombre con la extension sin el punto
      let newdomainNoun = domainNoun.slice(
        0,
        -domainExtensionWithoutDot.length
      );
      // si coincide creo nuevo nombre sin las ultimas letras de la extension
      return newdomainNoun; // devuelvo el nuevo nombre
    } else return domainNoun; // sino coincide, devuelvo el nombre tal cual sin cambiar
  };

  // genera todos los posibles dominios

  const createDomains = () => {
    let domains = "";
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let m = 0; m < extension.length; m++) {
            let newNoun = generateDomainHacks(noun[k], extension[m]);
            if (newNoun == noun[k]) {
              domains += `${pronoun[i]}${adjective[j]}${newNoun}${extension[m]}<br>`;
            } else if (newNoun != noun[k]) {
              domains += `<b>${pronoun[i]}${adjective[j]}${newNoun}${extension[m]}</b><br>`; // si son domain hacks, ponerlo en negrita
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
};

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
