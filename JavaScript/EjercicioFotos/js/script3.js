window.addEventListener("load", inicio);
let contenedorPrincipal = document.getElementById("cajaImg");
let btnComenzar = document.getElementById("cargarImg");
let rutaImgH;
let rutaImgM;
rutaImgH = "https://randomuser.me/api/portraits/men/";
rutaImgM = "https://randomuser.me/api/portraits/woman/";

function inicio() {
    console.log("Entro a inicio");
    let caja = document.createElement("fieldset");
    contenedorPrincipal.className = "container";
    contenedorPrincipal.appendChild(caja);
    caja.className = "gallery";
    btnComenzar.onclick = CargarImgs();
    console.log("Entro al For");
    for (let i = 0; i < 20; i++) {
        let num1 = Math.round(Math.random() * 30);
        let imgs = document.createElement("img");
        imgs.className("gallery img");
        let srcImg = document.createAttribute("src");
        imgs.appendChild(srcImg);
        caja.appendChild(imgs);
    }


}

function CargarImgs() {
    console.log("Entro a cargar imágenes")
    let arrayImagenes = document.getElementsByClassName("gallery img");
    arrayImagenes.array.forEach(function (foto, indice) {
        if (num1 % 2 == 0) {
            foto.srcImg = rutaImgH + num1 + ".jpg"
            //srcImg = rutaImgH + num1 + ".jpg";
        } else {
            srcImg = rutaImgM + num1 + ".jpg";
        }
    });

}