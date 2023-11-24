window.onload = inicio;
let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
let bloqueCesta = document.createElement("div");
var objeto;
let contenedorCesta = document.querySelector("tbody");
var total = 0;
var calculoPrecio = 0;
let precioTotal = document.getElementById("precio");

let pwd = document.getElementById("idPwd");
let btnGestionAl = document.getElementById("confirmar");
btnGestionAl.onclick = login;

let btnPDF = document.getElementById("imprimirPDF");
btnPDF.onclick = mostrarPDF;
let btnPagar = document.getElementById("crearTicket");
btnPagar.onclick = crearFactura;
let vectorFrutas = [];
// let btnEnviar = document.getElementById("enviarPDF");
// btnEnviar.onclick = enviarMail;

// ------------------------------------------------------------------------------------------------------------------

function inicio() {
    cargarContenido();
    console.log(objeto);
}

function mostrarPDF() {
    var estilo = "<style>" +
        "table {width: 100%;font: 17px Calibri;}" +
        "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
        "padding: 2px 3px;text-align: center;}" +
        "</style>";

    actualizarAlmacen();

    let ticket1 = document.getElementById("cestaCompra").innerHTML;
    console.log(ticket1);

    let win = window.open("ticked.pdf", "Ticket Fruteria", "height=700,width=700");
    win.document.write('<html><head>');
    win.document.write('<title>Ticket</title>'); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write("<table>");
    win.document.write(ticket1);
    win.document.write("</table>");
    win.document.write("<br/>Total: " + precio.textContent); // contenidos dentro del body
    win.document.write('</body></html>');

    win.document.close(); //cerrar ventana 
    win.print();
}

function actualizarAlmacen() {
    console.log("Entro en cliente");
    let infoCliente = prompt("Mi Nombre:");
    for (let i = 0; i < vectorFrutas.length; i++) {
        let nombreFruta = vectorFrutas[i];

        $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/productos3/insertarFacturacion.php",
            type: "POST",
            data: {
                total: total,
                productos: nombreFruta,
                clientes: infoCliente
            },
            dataType: "JSON"
        })

    }
}

function crearFactura() {
    console.log("Entro en crear Factura");
    let infoCliente = prompt("Mi Nombre:");
    for (let i = 0; i < vectorFrutas.length; i++) {
        let nombreFruta = vectorFrutas[i];
        console.log("PRECIO: " + total + "__PRODUCTOS: " + nombreFruta + "\nDe: " + infoCliente);
        $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/productos3/insertarFacturacion.php",
            type: "POST",
            data: {
                total: total,
                productos: nombreFruta,
                clientes: infoCliente
            },
            dataType: "JSON"
        })

    }

}


function enviarMail() {
    alert("enviar mail");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mbotez01@educarex.es",
        Password: "zdwclpdilqfflcdp ",
        To: 'profeaugustobriga@gmail.com',
        From: 'mbotez01@educarex.es',
        Subject: "Enviar mail usuario JS",
        Body: "TODO OK!!",
        // Attachments: [
        // {
        // name : "factura.pdf",
        // path : pdfBase64
        // }]
    }).then(function () {
        alert("MAIL ENVIADO OK")
    });
}

// function obtenerFechaActual() {
//     const fecha = new Date();

//     const año = fecha.getFullYear();
//     const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
//     const dia = fecha.getDate().toString().padStart(2, '0');

//     const fechaFormateada = `${año}-${dia}-${mes}`;

//     return fechaFormateada;
// }

function cargarFrutas() {
    bloqueHtml.className = "row";
    for (let i = 0; i < objeto.length; i++) {
        let vector = [];
        vector.push(objeto[i].id, objeto[i].name, objeto[i].photo, objeto[i].price);
        bloqueHtml.innerHTML +=
            '<div class="col-lg-4">' +
            '<img class="card-img-top" onclick=anadirCesta("' +
            vector +
            '") src=' +
            objeto[i].photo +
            ' width="90" height="90" alt=' +
            objeto[i].id +
            ">" +
            '<div class="card-body" onclick=anadirCesta("' +
            vector +
            '")>' +
            '<h4 class="card-title">' +
            objeto[i].name +
            "</h4>" +
            '<p class="card-text">' +
            objeto[i].price +
            "</p></div></div>";
    }

    cajaFrutas.appendChild(bloqueHtml);
}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            cargarFrutas();
        }
    };
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php",
        true
    );
    xhr.send();
}

function anadirCesta(vector) {
    let cajaTr = document.createElement("tr");
    console.log(vector);
    let vectorX = vector.split(",");
    let peso = prompt("Teclea los kgs de " + vectorX[1]);
    calculoPrecio = peso * parseFloat(vectorX[3]);

    vectorFrutas.push(vectorX[1]);
    total = total + calculoPrecio;
    precioTotal.textContent = total + "€";

    if (peso && !isNaN(peso)) {
        cajaTr.innerHTML =
            "<td>" + vectorX[1] + "</td>" +
            "<td>" + vectorX[3] + "€</td>" +
            "<td>" + peso + "Kg</td>" +
            "<td>" + calculoPrecio +
            "€</td>" +
            "<td>" + //simular botón con a href añado clase btn btn-danger (color rojo)
            "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
            //anulo el href, no hay link , pero sí hay evento onclick con
            //parámetro incluido: dni de esa tupla
            " href='javascript:void(0)' onclick=eliminar(this,'" +
            calculoPrecio +
            "')>" +
            //texto del botón e icono
            "ELIMINAR<i class='bi-trash'></i></a></div> " +
            "</td>";
    }
    contenedorCesta.appendChild(cajaTr);
}

function eliminar(fila, calculo) {
    //Subir de nivel hasta llegar a elmento padre tabla
    let filaTabla = fila.parentNode.parentNode;
    //Subir un nivel más para coseguir el elemento tr de esa tabla y pasamos la tabla por parametro
    filaTabla.parentNode.remove(filaTabla);
    total = total - calculo;
    precioTotal.textContent = total + "€";
}

function login() {
    if (pwd.value == "frutas") {
        window.open("../CRUD_Back/index.html");
    }
}