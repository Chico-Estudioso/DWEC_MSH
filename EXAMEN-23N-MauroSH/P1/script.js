window.onload = inicio;

let cajaRepresentantes = document.getElementById("representantes");
let cajaListadoP = document.getElementById("listadoP");
let cajaListadoV = document.getElementById("listadoV");
let cajaOrdenados = document.getElementById("representantes");
/*EJERCICIO 1*/
let sumaA = 0;
let sumaB = 0;
let sumaC = 0;
let sumaD = 0;

/*EJERCICIO 2*/
let sumaPA = 0;
let sumaPB = 0;
let sumaPC = 0;
let sumaPD = 0;

/*EJERCICIO 3*/
let sumaVA = 0;
let sumaVB = 0;
let sumaVC = 0;
let sumaVD = 0;

/*EJERCICIO 4*/
let sumaOA = 0;
let sumaOB = 0;
let sumaOC = 0;
let sumaOD = 0;


function inicio() {
    cargarContenido();
}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            cargarRepresentantes();
            cargarListadoP();
            cargarListadoV();
            cargarOrdenados();
        }
    };
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",
        true
    );
    xhr.send();

}

function cargarRepresentantes() {
    //console.log("Entro a otros metodos");
    console.log(objeto);
    objeto.forEach(comprobarRepresentantes);


    function comprobarRepresentantes(item, index) {
        console.log(item.Representantes);
        let votosPA = parseInt(item.votosPA);
        let votosPB = parseInt(item.votosPB);
        let votosPC = parseInt(item.votosPC);
        let votosPD = parseInt(item.votosPD);

        let maxVotos = Math.max(votosPA, votosPB, votosPC, votosPD);

        if (maxVotos === votosPA) {
            //console.log(item.nombreProvincia + " tiene más votos para PA");
            sumaA = sumaA + parseFloat(item.Representantes);
            console.log(sumaA);

        } else if (maxVotos === votosPB) {
            //console.log(item.nombreProvincia + " tiene más votos para PB");
            sumaB = sumaB + parseFloat(item.Representantes);

        } else if (maxVotos === votosPC) {
            // console.log(item.nombreProvincia + " tiene más votos para PC");
            sumaC = sumaC + parseFloat(item.Representantes);

        } else if (maxVotos === votosPD) {
            // console.log(item.nombreProvincia + " tiene más votos para PD");
            sumaD = sumaD + parseFloat(item.Representantes);
        }
        if (index == 22) {
            cajaRepresentantes.innerHTML +=
                "<div>Partido A: " + sumaA + "</div>" +
                "<div>Partido B: " + sumaB + "</div>" +
                "<div>Partido C: " + sumaC + "</div>" +
                "<div>Partido D: " + sumaD + "</div>";
        }
    }
}
function cargarListadoP() {
    objeto.forEach(comprobarListadoP);

    function comprobarListadoP(item, index) {

        let votosPA = parseInt(item.votosPA);
        let votosPB = parseInt(item.votosPB);
        let votosPC = parseInt(item.votosPC);
        let votosPD = parseInt(item.votosPD);

        let maxVotos = Math.max(votosPA, votosPB, votosPC, votosPD);

        if (maxVotos === votosPA) {
            //console.log(item.nombreProvincia + " tiene más votos para PA");
            sumaPA = sumaPA + "," + item.nombreProvincia
            console.log(sumaPA);

        } else if (maxVotos === votosPB) {
            //console.log(item.nombreProvincia + " tiene más votos para PB");
            sumaPB = sumaPB + "," + item.nombreProvincia
            console.log(sumaPB);

        } else if (maxVotos === votosPC) {
            // console.log(item.nombreProvincia + " tiene más votos para PC");
            sumaPC = sumaPC + "," + item.nombreProvincia
            console.log(sumaPC);

        } else if (maxVotos === votosPD) {
            // console.log(item.nombreProvincia + " tiene más votos para PD");
            sumaPD = sumaPD + "," + item.nombreProvincia
            console.log(sumaPD);
        }
        if (index == 22) {
            cajaListadoP.innerHTML +=
                "<div>Partido A: " + sumaPA + "</div>" +
                "<div>Partido B: " + sumaPB + "</div>" +
                "<div>Partido C: " + sumaPC + "</div>" +
                "<div>Partido D: " + sumaPD + "</div>";
        }
    }
}

function cargarListadoV() {
    objeto.forEach(comprobarListadoV);

    function comprobarListadoV(item, index) {
        let votosPA = parseInt(item.votosPA);
        let votosPB = parseInt(item.votosPB);
        let votosPC = parseInt(item.votosPC);
        let votosPD = parseInt(item.votosPD);

        let maxVotos = Math.max(votosPA, votosPB, votosPC, votosPD);

        if (maxVotos === votosPA) {
            //console.log(item.nombreProvincia + " tiene más votos para PA");
            sumaVA = sumaVA + votosPA;
            console.log(sumaPA);

        } else if (maxVotos === votosPB) {
            //console.log(item.nombreProvincia + " tiene más votos para PB");
            sumaVB = sumaVB + votosPA;
            console.log(sumaPB);

        } else if (maxVotos === votosPC) {
            // console.log(item.nombreProvincia + " tiene más votos para PC");
            sumaVC = sumaVC + votosPA;
            console.log(sumaPC);

        } else if (maxVotos === votosPD) {
            // console.log(item.nombreProvincia + " tiene más votos para PD");
            sumaVD = sumaVD + votosPA;
            console.log(sumaPD);
        }
        if (index == 22) {
            cajaListadoV.innerHTML +=
                "<div>Partido A: " + sumaVA + "</div>" +
                "<div>Partido B: " + sumaVB + "</div>" +
                "<div>Partido C: " + sumaVC + "</div>" +
                "<div>Partido D: " + sumaVD + "</div>";
        }
    }

}

function cargarOrdenados() {
    objeto.forEach(comprobarganador);

    function comprobarganador(item, index) {
        let votosPA = parseInt(item.votosPA);
        let votosPB = parseInt(item.votosPB);
        let votosPC = parseInt(item.votosPC);
        let votosPD = parseInt(item.votosPD);

        let maxVotos = Math.max(votosPA, votosPB, votosPC, votosPD);

        if (maxVotos === votosPA) {
            //console.log(item.nombreProvincia + " tiene más votos para PA");
            sumaOA++;
            console.log(sumaOA);

        } else if (maxVotos === votosPB) {
            //console.log(item.nombreProvincia + " tiene más votos para PB");
            sumaOB++;
            console.log(sumaOB);

        } else if (maxVotos === votosPC) {
            // console.log(item.nombreProvincia + " tiene más votos para PC");
            sumaOC++;
            console.log(sumaOC);

        } else if (maxVotos === votosPD) {
            // console.log(item.nombreProvincia + " tiene más votos para PD");
            sumaOD++;
            console.log(sumaOD);
        }


        if (index == 22) {
            let sumaTotal = [sumaOA, sumaOB, sumaOC, sumaOD];
            console.log(sumaTotal);
            cajaOrdenados.innerHTML +=
                "<div>"+sumaTotal+"</div>";
        }
    }
}

