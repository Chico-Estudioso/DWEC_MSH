window.onload = inicio;
function inicio() {
    obtenerPaises();
    obtenerDeportes();
    // obtenerEquipos();
}
async function obtenerPaises() {
    const url = " https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    var headers = {};

    const objeto = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    });
    try {


        const data = await objeto.json();
        console.log(data);
        let contenedor = document.getElementById("pais");
        for (let i = 0; i < data.countries.length; i++)
            contenedor.innerHTML +=
                `
    <div>
    <option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>
    
     </div>
    `
    } catch (error) {
        alert(error);
    }
}
async function obtenerDeportes() {
    console.log("entro en obtenerDeportes");
    const url = "deportes.json";
    var headers = {};
    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    });
    try {


        const data = await response.json();
        let contenedor = document.getElementById("deporte");
        for (let i = 0; i < data.deportes.length; i++)
            contenedor.innerHTML +=
                `
    <div>
    <option value="${data.deportes[i].name}">${data.deportes[i].name}</option>
    
     </div>
    `
    } catch (error) {
        alert(error);
    }
}

async function obtenerEquipos() {
    console.log("entro en obtenerEquipos");
    let sport1 = document.getElementById("deporte");
    let pais1 = document.getElementById("pais");
    const url = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=" + sport1.value + "&c=" + pais1.value + "";
    var headers = {};

    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    });
    try {


        const data = await response.json();
        let contenedor = document.getElementById("contenido");
        contenedor.innerHTML = "";
        for (let i = 0; i < data.teams.length; i++)
            contenedor.innerHTML +=
                `
    <div>
    <img src="${data.teams[i].strTeamBadge}" width="200px"/>
     <p>${data.teams[i].strTeam}</p>
     </div>
    `
    } catch (error) {
        alert(error);
    }
}