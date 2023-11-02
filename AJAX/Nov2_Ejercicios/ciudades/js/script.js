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
                let row = document.createElement("tr");
                let td_Ciudad = document.createElement("td");
                let td_Habitantes = document.createElement("td");
                let td_VIDEO = document.createElement("td");
                let td_IMAGEN = document.createElement("td");
                let td_MAPA = document.createElement("td");
                let td_ID = document.createElement("td");

                td_Ciudad.innerHTML = item.ciudad_nombre;
                td_Habitantes.innerHTML = item.ciudad_habitantes;
                td_VIDEO.innerHTML = item.video;
                td_IMAGEN = item.imagen;
                td_MAPA = item.mapa;
                td_ID = item.ciudad_ID;


                //AppendChild
                row.appendChild(td_Ciudad);
                row.appendChild(td_Habitantes);
                row.appendChild(td_VIDEO);
                row.appendChild(td_IMAGEN);
                row.appendChild(td_MAPA);
                row.appendChild(td_ID);
                container.appendChild(row);
            }
        }
    }
    //PRIMERO SE HACE LA PETICIÓN
    xhr.open("GET", 'http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php', true);
    xhr.send();
}
