window.onload = inicio;

function inicio() {
    //Crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            let container = document.querySelector("table tbody");
            objeto.forEach(posicionar);
            function posicionar(item, indice) {

                let divx = document.createElement("div");
                let fotoMenu = document.createElement("img");
                let nombrePlatos = document.createElement("h4");
                let ingredientes = document.createElement("p");
                let precio = document.createElement("p");

                divx.className = "col-lg-4 menu-item";
                fotoMenu.innerHTML = item.imagen;
                nombrePlatos.innerHTML = item.nombre;
                ingredientes.innerHTML = item.ingredientes;
                precio.innerHTML = item.precio;

                //APPEND CHILD
                container.appendChild(divx);
                divx.appendChild(fotoMenu);
                divx.appendChild(nombrePlatos);
                divx.appendChild(ingredientes);
                divx.appendChild(precio);
            }
        }
    }
    //PRIMERO SE HACE LA PETICIÓN
    xhr.open("GET", 'http://moralo.atwebpages.com/restaurante/getPlatos.php', true);
    xhr.send();
}