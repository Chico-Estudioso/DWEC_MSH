window.onload = inicio;

function inicio() {
  let btn = document.getElementById("listar1");
  btn.onclick = function () {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(datos => {
        //console.table(datos);

        cargarTabla(datos);
      });
  }
}
function cargarTabla(datos) {
  console.table("Metadatos :" + Object.keys(datos[0]));
  let tabla = document.getElementById("tabla1");
  let cabecera = document.createElement("thead");
  let trHead = document.createElement("tr");
  let vectorMetadatos = Object.keys(datos[0]);

  console.log(vectorMetadatos);
  for (let i = 0; i < vectorMetadatos.length; i++) {
    trHead.innerHTML += '<th>' + vectorMetadatos[i] + '</th>';
  }
  // APPENDS CHILD
  cabecera.appendChild(trHead);
  tabla.appendChild(trHead);

  let cuerpo = document.createElement("tbody");

  //console.log(datos[0]);
  // for (let i = 0; i < datos.length; i++) {
  //   for (let j = 0; j < vectorMetadatos.length; j++) {
  //     trBody.innerHTML += '<td>' + datos[i].vectorMetadatos[j] + '</td>';
  //   }
  // }

  // for (let i = 0; i < datos.length; i++) {
  //   let vectorDatos = [];
  //   vectorDatos.push(datos[i]);

  //   for (let j = 0; j < vectorDatos.length; j++) {
  //     console.log("VECTOR DATOS:" + vectorDatos[2]);
  //     trBody.innerHTML += '<td>' + vectorDatos[j] + '</td>';
  //   }
  // }
  datos.forEach(contenido);

  function contenido(item, index) {
    //console.table(item);
    // trBody.innerHTML += '<td>' + item + '</td>';
    let trBody = document.createElement("tr");
    for (let j = 0; j < vectorMetadatos.length; j++) {
      let span1 = document.createElement("span");
      let td = document.createElement("td");
      let campo = vectorMetadatos[j];
      if (campo == "image" || campo == "imagen") {
        let imagen = document.createElement("img");
        imagen.setAttribute("src", item[campo]);
        imagen.setAttribute("width", 100);
        span1.appendChild(imagen);
        td.appendChild(span1)
      } else {
        span1.textContent = item[campo];
        td.appendChild(span1);
      }
      trBody.appendChild(td);
    }
    cuerpo.appendChild(trBody);
  }


  tabla.appendChild(cuerpo);
}