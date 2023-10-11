window.onload = inicio;

const imagenes = ["./img/gallery/gallery-1.jpg", "./img/gallery/gallery-2.jpg", "./img/gallery/gallery-3.jpg", "./img/gallery/gallery-4.jpg", "./img/gallery/gallery-5.jpg", "./img/gallery/gallery-6.jpg", "./img/gallery/gallery-7.jpg", "./img/gallery/gallery-8.jpg"]
const ciudades = ["Londres", "Tokyo", "Roma", "Berlín", "New York", "Toril", "Talayuela", "Navalmoral"]
const traduccionMenu = ["Team A", "Team B", "Team C", "Team D", "Team E"]
const Servicios = ["RRHH", "Contabilidad", "Marketing", "Diseño", "Producción", "Desarrollo"]
const nombreWeb = "DWEC";
const subTitulo = "Desarrollo web entorno cliente";
let logotipo = "./img/apple-touch-icon.png";
let nuevoPlaceHolder = "teclea un correo de educarex"
let nuevoServicio = "Nuevos Servicios"
let contenidoServicios = ["./img/chefs/chefs-1.jpg", "./img/chefs/chefs-2.jpg", "./img/chefs/chefs-3.jpg", "./img/chefs/chefs-4.jpg", "./img/chefs/chefs-5.jpg", "./img/chefs/chefs-6.jpg"]

const itemContenido = ["cuarto slash", "quinto slash", "sexto slash", "septimo slash"];
const autor = ["Lola", "Paca", "Berta", "Ramira"]
NuevoPrecio = ["Precio X", "Precio Y", "Precio Z"];
A = [20, 30, 50, 20];
B = [340, 345, 344, 320];
C = [30, 20, 30, 10];
D = [100, 200, 300, 400];

function inicio() {
    let navegacion = document.querySelectorAll("nav ul li a");
    let teamDaw = ["Manuel", "Mario", "Mauro", "Álvaro", "Raúl"];
    let enlaceDaw = ["http://practicasmanuelbote.atwebpages.com", "http://practicasmanuelbote.atwebpages.com", "http://practicasmanuelbote.atwebpages.com", "http://practicasmanuelbote.atwebpages.com", "http://practicasmanuelbote.atwebpages.com"];
    let logo = document.querySelector("[href='#myPage']");
    let image = document.createElement("img");
    image.src = "img/apple-touch-icon.png";
    logo.appendChild(image);
    let nombre = document.querySelector("h1");
    nombre.textContent = "2ºDAW";

    let subtitulo = document.querySelector("div p");
    subtitulo.textContent = "Los pitbull del Javascript >:(";

    let servicios = document.querySelector("#services>h2");
    servicios.textContent = "Nuevos servicios";

    let listaServicios = document.querySelectorAll("span ~h4");

    listaServicios.forEach(mostrarServicios);
    function mostrarServicios(item, indice) {
        //console.log(item.textContent);
        item.textContent = servicios[indice];
        let imgS = document.createElement("img");
        imgS.src = contenidoServicios[indice];
        imgS.className = "";
        item.appendChild(imgS);
    }

    let portifolio = document.querySelector("#galeria > img");
    portifolio.forEach(mostrarPortfolio);
    function mostrarPortfolio(item, indice) {
        item.src = imagenes[indice];
    }

    navegacion.forEach(accion);
    function accion(item, indice) {
        item.textContent = teamDaw[indice];
        item.setAttribute("target", "_blank");
        item.href = enlaceDaw[indice];
    }
}