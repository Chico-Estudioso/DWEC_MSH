window.addEventListener("load", inicio);
let contenedorPrincipal = document.getElementById("cajaImg");
let btnComenzar = document.getElementById("cargarImg");
let rutaImgH;
let rutaImgM;
rutaImgH="https://randomuser.me/api/portraits/men/";
rutaImgM="https://randomuser.me/api/portraits/woman/";

function inicio(){
    console.log("Entro a inicio");
    let caja = document.createElement("fieldset");
    caja.className = "container";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Imágenes";
    contenedorPrincipal.appendChild(caja);
    caja.appendChild(leyenda);
    let contenedorFlex = document.createElement("div");
    contenedorFlex.className = "gallery";
    btnComenzar.onclick=CargarImgs();
    for (let i=0; i<20;i++){
        let num1=Math.round(Math.random()*30);
        let imgs=document.createElement("img");
        imgs.className("gallery img");
        let srcImg=document.createAttribute("src");
        imgs.appendChild(srcImg);
        if(num1%2==0){
            srcImg=rutaImgH+num1+".jpg";
        }else{
            srcImg=rutaImgM+num1+".jpg";
        }
        contenedorFlex.appendChild(imgs);
    }
    caja.appendChild(contenedorFlex);
}

function CargarImgs(){
    let arrayImagenes=document.getElementsByClassName("gallery img");
    
    
}