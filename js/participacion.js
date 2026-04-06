import { rParticipacionMenu, rParticipacionContent, rParticipacionVotos } from './render.js';
import { getVotosDepartamento, getVotosProvincia, getVotosDistritos, getTotal, getDistrito } from './consultas.js';

const contenido = document.querySelector(".contenido-interna");
const menu = document.querySelector(".menu-interna");

menu.innerHTML = rParticipacionMenu;
contenido.innerHTML = rParticipacionContent;


var detalle = "";
var votos = null;

contenido.querySelector("#renderVotosE").addEventListener("click", async () => {

    detalle = "CONTINENTE";
    votos = await getVotosDepartamento('Extranjero');
    const total = getTotal(votos)
    votos.push(total)
    const html = rParticipacionVotos(votos, detalle, total);
    contenido.innerHTML = html;
});

contenido.querySelector("#renderVotosN").addEventListener("click", async () => {

    detalle = "DEPARTAMENTO";
    votos = await getVotosDepartamento('Nacional');
    const total = getTotal(votos)
    votos.push(total)
    const html = rParticipacionVotos(votos, detalle, total)
    contenido.innerHTML = html;
});


contenido.addEventListener("click", async (e) => {
    const row = e.target.closest('.rowVotes');
    if (!row) return;

    var votos = null;
    var total = 0;
    var nivel = row.getAttribute("data-nivel")
    var id = row.getAttribute("data-nombre");

    if(nivel == "Departamento"){
        detalle = "Provincia";
        votos = await getVotosProvincia(id)
        console.log(id)
    }else if(nivel == "Provincia"){
        detalle = "Distrito"
        votos = await getVotosDistritos(id)
        console.log(id)
    }else if(nivel == "Distrito"){
        detalle = "Distrito"
        const provincia = row.getAttribute("data-provincia")
        votos = await getDistrito(id, provincia)
        console.log(id +" "+ provincia)
        total = votos[0]
        console.log(total)
    }

    if(nivel !== "Distrito"){
        total = getTotal(votos)
        votos.push(total)
    }
    
    const render = rParticipacionVotos(votos, detalle, total)
    contenido.innerHTML = render
})
