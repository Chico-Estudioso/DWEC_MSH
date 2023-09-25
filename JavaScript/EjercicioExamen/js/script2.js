window.addEventListener("load", inicio);


function inicio() {
    let contenedorP = document.createElement("div");
    contenedorP.className = "container";
    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorP);
    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let texto = document.createElement("legend");
    texto.textContent = "Práctica 8";
    contenedorS.appendChild(texto);
    contenedorP.appendChild(contenedorS);
    var segundos = 30;
    var temporizador = setInterval(refrescar, 1000);

    function refrescar{

        var contadorBordes = 0;
        for (let i = 0; i < 20; i++) {
            let num1 = Math.floor(Math.random() * 20);
            let rutaH = "https://randomuser.me/api/portraits/men/";
            let rutaM = "https://randomuser.me/api/portraits/women/";

            let imagen = document.createElement("img");
            imagen.className = "gallery img";



            contenedorS.appendChild(imagen);
            if (i % 2 == 0) {
                imagen.src = rutaH + num1 + ".jpg";

            } else {
                imagen.src = rutaM + num1 + ".jpg";
            }

            imagen.onmouseover = expandir;
            imagen.onmouseleave = encoger;
            imagen.onclick = borde;

            function expandir() {
                imagen.style.transform = "scale(1.5)";
            }

            function encoger() {
                imagen.style.transform = "scale(1)";
            }

            function borde() {
                if (imagen.className == "ponerBorde") {
                    imagen.className = "quitarBorde";
                    contadorBordes--;
                    console.log(contadorBordes);

                } else {
                    if (contadorBordes == 6) {
                        return;
                    }
                    imagen.className = "ponerBorde";
                    contadorBordes++;
                    console.log(contadorBordes);

                }

                if (contadorBordes == 6) {
                    console.log("Desactivación de Bordes Operativa");
                    let arrayImg = document.querySelectorAll("img");
                    console.log(arrayImg);
                    arrayImg.forEach(function (item, indice) {
                        item.disabled = "true";
                    }
                    )
                        ;
                }
            }
        }


    }




}