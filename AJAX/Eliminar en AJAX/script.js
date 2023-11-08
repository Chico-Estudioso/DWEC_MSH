window.onload = inicio;
function inicio() {
    document.getElementById("btnInsertar").addEventListener("click", insertarCiudades);
}
function insertarCiudades() {
    console.log("entro en insertar Ciudades");
    var id = document.getElementById("_id").value;
    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/EliminarCiudades.php",
        type: "GET",
        data: {
            id: id,
        }
    });


    mostrar();
}
function mostrar() {
    var cajaMostrarContenido = document.querySelector("#mostrarCiudades");
    var bloqueHtml = document.createElement("div");
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {

        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                bloqueHtml.innerHTML += "<div class='row'>" +
                    "<div class='col-lg-2'>" + datos.id + "</div>";
            }
            cajaMostrarContenido.appendChild(bloqueHtml);
        }

    }
    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/ciudades/clase_Conectar.php")
    xhr.send()
}
