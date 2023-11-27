window.onload = inicio;

const partidos = ["Partido A", "Partido B", "Partido C", "Partido D"];
const PROVINCIAS = [0, 0, 0, 0];
const votosTotales = [0, 0, 0, 0];
const nombreProvinciasGanadas = ["", "", "", ""];
let representantes = [];

let caja1 = document.querySelector("#caja1");
let caja2 = document.querySelector("#caja2");
let caja3 = document.querySelector("#caja3");

function inicio() {
    console.log("INICIO");
    resultadoElecciones();
}

function resultadoElecciones() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                let prov = [
                    parseInt(datos.votosPA),
                    parseInt(datos.votosPB),
                    parseInt(datos.votosPC),
                    parseInt(datos.votosPD),
                ];
                let mayor = -1;
                let pos = -1;
                for (let i = 0; i < prov.length; i++) {
                    if (prov[i] > mayor) {
                        mayor = prov[i];
                        pos = i;
                    }

                    votosTotales[i] += prov[i];
                }
                PROVINCIAS[pos] += parseInt(datos.Representantes);
                nombreProvinciasGanadas[pos] += datos.nombreProvincia + ",";
            }
            for (let i = 0; i < partidos.length; i++) {
                let fila1 = document.createElement("tr");
                let fila2 = document.createElement("tr");
                let fila3 = document.createElement("tr");
                fila1.innerHTML +=
                    "<td>" + partidos[i] + "Votos totales: " + votosTotales[i] + "</td>";

                fila2.innerHTML +=
                    "<td>" + partidos[i] + "Representantes: " + PROVINCIAS[i] + "</td>";

                fila3.innerHTML +=
                    "<td>" +
                    partidos[i] +
                    "Provincias ganadas: " +
                    nombreProvinciasGanadas[i] +
                    "</td>";

                caja1.appendChild(fila1);
                caja2.appendChild(fila2);
                caja3.appendChild(fila3);
            }

            //cajaMostrarContenido.appendChild(bloqueHtml);
        }
    }
    xhr.open(
        "POST",
        "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php"
    );
    xhr.send();
}