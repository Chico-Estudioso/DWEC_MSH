window.onload = inicio;

function inicio() {
    document.getElementById("btninsertar").addEventListener("click", insertarCiudades);
}

function insertarCiudades() {
    var id = document.querySelector("#_id").value;
    var nombre = document.querySelector("#_nombre").value;
    var poblacion = document.querySelector("#_poblacion").value;
    var densidad = document.querySelector("#_densidad").value;
    var extension = document.querySelector("#_superficie").value;
    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/insertarCiudades.php",
        type: "POST",
        data: {
            id: id,
            nombre: nombre,
            poblacion: poblacion,
            densidad: densidad,
            extension: extension
        }
    })


    mostrar();
}
function mostrar() {
    var cajaMostrarContenido = document.querySelector("#mostrar_ciudades");
    var bloqueHtml = document.createElement("div");
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                bloqueHtml.innerHTML += "<div class='row'>" +
                    "<div class='col-lg-2'>" + datos.id + "</div>" +
                    "<div class='col-lg-2'>" + datos.nombre + "</div>" +
                    "<div class='col-lg-2'>" + datos.poblacion + "</div>" +
                    "<div class='col-lg-2'>" + datos.densidad + "</div>" +
                    "<div class='col-lg-2'>" + datos.extension + "</div>" +
                    "</div>";
                cajaMostrarContenido.appendChild(bloqueHtml);

            }
        }
        xhr.open("POST", "http://code.jquery.com/menuAjax/ciudades/insertarCiudades.php");
        xhr.send();
    }
}