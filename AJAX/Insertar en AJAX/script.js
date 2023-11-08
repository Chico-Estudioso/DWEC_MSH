window.onload = inicio;

function inicio() {
    document.getElementById("btninsertar").addEventListener("click", insertarCiudades);
}

function insertarCiudades() {

    mostrar();
}
function mostrar() {

    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
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
        }
        xhr.open("POST", "http://code.jquery.com/menuAjax/ciudades/insertarCiudades.php");
        xhr.send();
    }
}