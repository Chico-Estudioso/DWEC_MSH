window.onload = inicio;

const NUM_COLUMNAS = 6;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
let vectorCajas = [];
let v_numeros = [];
let contAciertos = 0;
const columnas = [];
const vectorGlobal = [];
function inicio() {
  cuerpo = document.querySelector("body");
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);
  contenedorB=document.createElement("div");
  contenedorB.className = "container";
   btnJugar = document.createElement("button");
  btnJugar.textContent = "SORTEO";
  btnJugar.className="disabledDiv";
  contenedorB.appendChild(btnJugar);
  btnJugar.onclick = jugar;

   btnReset = document.createElement("button");
  btnReset.textContent = "RESETEAR";
  contenedorB.appendChild(btnReset);
  btnReset.onclick = reset;
  cuerpo.appendChild(contenedorB);
//nuevo 

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);
    let contRojos = 0;
    columnas.push(contenedorS);
    if (i != 0) {
      contenedorS.classList.add("disabledDiv");
    }
    for (let x = 0; x < NUM_CAJAS; x++) {
      let caja = document.createElement("div");
      
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;

      function marcar() {
      
        if (v_numeros.length < 6 ) {
          if ( !v_numeros.includes(x + 1)){
          console.log("Entro en marcar");
          vectorCajas.push(caja);
          console.log("Soy X " + (x + 1));
          v_numeros.push(x + 1);
          caja.style.backgroundColor = "red";
          // caja.onclick = desmarcar;
          contRojos++;
          if (contRojos==6){  
             columnas[i].classList.add("disabledDiv"); 
             vectorGlobal.push(v_numeros);
             contRojos=0;
             v_numeros=[];
             if (i==(NUM_COLUMNAS-1)){
              console.log("entro en abrir btnJugar")
              btnJugar.classList.remove("disabledDiv")
             }else
             {
              columnas[i+1].classList.remove("disabledDiv");
             }
            }
        }else{
          console.log("Entro en desmarcar");
          caja.style.backgroundColor = "green";
          let n = parseInt(caja.textContent);
           let posicion = v_numeros.indexOf(n);
          console.log("Posicion: " + posicion);
           v_numeros.splice(posicion, 1);
           contRojos--;
        }
      }
      }

      
    }
  }
}

function jugar() {
  btnJugar.className="disabledDiv"
  btnReset.className="disabledDiv"
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

  let vectorN = [];

  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      num = Math.ceil(Math.random() * 50);
    } while (vectorN.includes(num));

    vectorN.push(num);
    vectorN.sort();
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    contenedorSorteo.appendChild(box);
  }
  let box = document.createElement("div");
  box.className = "gallery2 div";
  box.innerHTML = "Sorteo Ganador <br>  Aciertos";
  contenedorSorteo.appendChild(box);


  
  for(let col=0;col<6;col++){
   
    contAciertos=0;
    
    for (let num=0;num<6;num++){
      if(vectorN.includes(vectorGlobal[col][num])){
        contAciertos++;
      }
    }
    //mostrar combinación
    let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);

  for (let i = 0; i < 6; i++) {
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = vectorGlobal[col][i];
    box.style.backgroundColor = "yellow";
    contenedorSorteo.appendChild(box);
    if (vectorN.includes(vectorGlobal[col][i])) {
           box.style.backgroundColor = "red";
         }
  }
  let resultado = document.createElement("div");
  resultado.className = "gallery2 div";
  resultado.style.backgroundColor = "rgb(0,160,0)";
  contenedorSorteo.appendChild(resultado);
  resultado.textContent = contAciertos;
  
}
}
function reset() {
 
    contenedorP.remove();
    contenedorB.remove();
    v_numeros=[];
     vectorCajas = [];

    inicio();
 
}
