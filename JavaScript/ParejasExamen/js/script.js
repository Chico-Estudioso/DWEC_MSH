window.addEventListener('load', inicio);
const ArrayImagenes = ['img/0.JPG', 'img/1.JPG', 'img/2.JPG', 'img/3.JPG', 'img/4.JPG', 'img/5.JPG', 'img/6.JPG', 'img/7.JPG'];
//array con 14 números enteros entre 0 y 7
const ArrayCajasImg = [];
const ArrayFinal = [];
const array1 = [];
const array2 = [];
//const pantallaJ = document.querySelector('#pantallaJuego');
//const resultado = document.querySelector('#resultado');
function inicio() {
  console.log("entra en inicio");
  let contadorAciertos = 0;
  let cuerpo = document.querySelector("body");
  let contenedorP = document.createElement("div");
  let contenedorS = document.createElement("div");
  contenedorS.className = "grid";
  cuerpo.appendChild(contenedorP);
  contenedorP.appendChild(contenedorS);
  for (let i = 0; i < 14; i++) {
    let img = document.createElement("img");
    img.src = "img/question.png";
    img.className = "img";
    contenedorS.appendChild(img);
    ArrayCajasImg.push(img);
  }

  /*ArrayCajasImg.push(accion);
  let numeros = [];
  function accion(item, indice) {
    let numImagenes = Math.random(Math.round() * 19);
    do {
      
    } while (numeros.includes(numImagenes, numImagenes));
    numeros[indice].push(numImagenes);
  }*/

  crearPanel();
}
//crear panel juego

function crearPanel() {
  let numImagenes1;
  let numImagenes2;
  for (let i = 0; i < 7; i++) {
    do {
      numImagenes1 = Math.round(Math.random() * 7)
    } while (array1.includes(numImagenes1));
    array1.push(numImagenes1);
    let numImagenes1;

    do {
      numImagenes2 = Math.round(Math.random() * 7)
    } while (array2.includes(numImagenes2));
    array2.push(numImagenes2);

    array1.forEach(function (item1, indice1) {
      ArrayFinal.push(item1);

    });
    array2.forEach(function (item2, indice2) {
      ArrayFinal.push(item2);
    });

    for (let i = ArrayFinal.length - 1; i > 0; i--) {
      var x = Math.round(Math.random() * (i + 1));
      [ArrayFinal[i], ArrayFinal[j]] = [ArrayFinal[j], ArrayFinal[i]];
    }
  }

}


