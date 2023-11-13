window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");

function inicio() {
    let elemento = document.querySelector("#botonAdd");
    elemento.addEventListener("click", insertarUsuario);

    cargarTabla();
}
function cargarTabla() {
    console.log("entro en cargarTabla")

    bloqueHtml.innerHTML = "<div class='row'>" +
        "<div class='col-lg-2 text-center' >DNI</div>" +
        "<div class='col-lg-2 text-center' >NOMBRE</div>" +
        "<div class='col-lg-2 text-center' >APELLIDO</div>" +
        "<div class='col-lg-2 text-center' >TELEFONO</div>" +
        "<div class='col-lg-2 text-center' >ELIMINAR</div>" +
        "<div class='col-lg-2 text-center' >MODIFICAR</div></div>";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {


        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //he accedido al fichero de datos y está abierto el servidor
            //tengo que averiguar en qué formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(clientes, index) {
                console.log("vector" + clientes.dni);
                let vector = [clientes.dni, clientes.nombre, clientes.apellido, clientes.telefono];
                bloqueHtml.innerHTML += "<div class='row'> " +
                    "<div class='col-lg-2 text-center'>" + clientes.dni + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.nombre + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.apellido + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.telefono + "</div>" +
                    //simular botón con a href añado clase btn btn-danger (color rojo)
                    "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
                    //anulo el href, no hay link , pero sí hay evento onclick con 
                    //parámetro incluido: dni de esa tupla
                    " href='javascript:void(0)' onclick=eliminar(\'" + clientes.dni + "\')>" +
                    //texto del botón e icono
                    "ELIMINAR<i class='bi-trash'></i></a></div> " +
                    //td del modificar
                    "<div class='col-lg-2 text-center'><a class='btn btn-info btn-md' " +
                    "href='javascript:void(0)' onclick=modificar('" + vector + "')>" +
                    "MODIFICAR<i class='bi bi-arrow-clockwise'></i></a></div>";
            }
        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", " http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();

    tabla.appendChild(bloqueHtml);
}


function insertarUsuario() {
    console.log("entro en insertar");

}
function eliminar(dni) {
    console.log("entro en eliminar " + dni);
    let respuesta = confirm("¿Estás seguro de querer eliminar? " + dni);
    //cargamos el método AJAX que ejecuta el servicio eliminar.php
    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/clientes/eliminarClientes.php",
        method: "POST",
        data: {
            dni: dni,
        },
        dataType: "JSON"
    });

}
function modificar(vector) {
    console.log("entro en modificar " + vector)
}