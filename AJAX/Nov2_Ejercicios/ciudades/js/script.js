window.onload = inicio;

function inicio() {
    //Crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            let container = document.querySelector("row gy-5");
            objeto.forEach(posicionar);

            function posicionar(item, indice) {
                

                //Append Child
            }
        }
    }
    //PRIMERO SE HACE LA PETICIÓN
    xhr.open("GET", 'http://moralo.atwebpages.com/restaurante/getPlatos.php', true);
    xhr.send();
}