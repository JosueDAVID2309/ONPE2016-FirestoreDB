import { getDepartamentos, getProvincias, getDistritos, getLocales, getGrupos, getGrupo } from './consultas.js'
import { aTemplate, renderGrupoDetalle } from './render.js';

//Selectors
const AmbSelector = document.querySelector("#cdgoAmbito");
const DepSelector = document.querySelector("#cdgoDep");
const ProSelector = document.querySelector("#cdgoProv");
const DisSelector = document.querySelector("#cdgoDist");
const LocSelector = document.querySelector("#cdgoLoc");

const ubigeo = new Array(6).fill("");

//divs 
const divGrupos = document.querySelector("#divGrupos");
divGrupos.style.display = "none";
const detalleGrupo = document.querySelector("#divGruposDetalle");
detalleGrupo.style.display = "none";



DepSelector.disabled = true;
ProSelector.disabled = true;
DisSelector.disabled = true;
LocSelector.disabled = true;

AmbSelector.addEventListener("change", async (e) => {
    const ambito = e.target.value;
    ubigeo[0] = ambito;

    if (!ambito) {
        DepSelector.disabled = true;
        DepSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        ProSelector.disabled = true;
        ProSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        DisSelector.disabled = true;
        DisSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        LocSelector.disabled = true;
        LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        return;
    }

    const departamentos = await getDepartamentos(ambito);
    
    DepSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    departamentos.forEach(dep => {
        const option = document.createElement("option");
        option.value = dep.idDepartamento;
        option.textContent = dep.Detalle;
        DepSelector.appendChild(option);
    });
    DepSelector.disabled = false;
    ProSelector.disabled = true;
    ProSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    DisSelector.disabled = true;
    DisSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    LocSelector.disabled = true;
    LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';

})

DepSelector.addEventListener("change", async (e) => {
    const departamento = e.target.value;
    ubigeo[1] = departamento;

    if (!departamento) {
        ProSelector.disabled = true;
        ProSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        DisSelector.disabled = true;
        DisSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        LocSelector.disabled = true;
        LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        return;
    }

    const provincias = await getProvincias(parseInt(departamento));
    ProSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    provincias.forEach(prov => {
        const option = document.createElement("option");
        option.value = prov.idProvincia;
        option.textContent = prov.Detalle;
        ProSelector.appendChild(option);
    });
    ProSelector.disabled = false;
    DisSelector.disabled = true;
    DisSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    LocSelector.disabled = true;
    LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
})

ProSelector.addEventListener("change", async (e) => {
    const provincia = e.target.value;
    ubigeo[2] = provincia;
    if (!provincia) {
        DisSelector.disabled = true;
        DisSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        LocSelector.disabled = true;
        LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        return;
    }

    const distritos = await getDistritos(parseInt(provincia));
    DisSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    distritos.forEach(dist => {
        const option = document.createElement("option");
        option.value = dist.idDistrito;
        option.textContent = dist.Detalle;
        DisSelector.appendChild(option);
    });
    DisSelector.disabled = false;
    LocSelector.disabled = true;
    LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
})

DisSelector.addEventListener("change", async (e) => {
    const distrito = e.target.value;
    ubigeo[3] = distrito;
    if (!distrito) {
        LocSelector.disabled = true;
        LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
        return;
    }
    const locales = await getLocales(parseInt(distrito));
    LocSelector.innerHTML = '<option selected="selected" value="">--SELECCIONE--</option>';
    locales.forEach(loc => {
        const option = document.createElement("option");
        option.value = loc.idLocalVotacion;
        option.textContent = loc.RazonSocial;
        LocSelector.appendChild(option);
    });
    LocSelector.disabled = false;
})

const tbody = document.querySelector("#tbMesas");
LocSelector.addEventListener("change", async (e) => {
    const local = e.target.value;
    const grupos = await getGrupos(parseInt(local));
    divGrupos.style.display = "block";

    const cantidadTR = Math.ceil(grupos.length/8);

    for(let i = 0; i < cantidadTR; i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < 8; j++){
            const indice = i*8 + j;
            if(indice < grupos.length){
                tr.innerHTML += aTemplate(grupos[indice]);
            }
        }
        tbody.appendChild(tr);
    }

});

tbody.addEventListener("click", async (e) => {
    const target = e.target.closest("#rowVotes");
    e.preventDefault();
    if(target){
        const id = target.getAttribute("data-id");
        const grupo = await getGrupo(id);
        detalleGrupo.style.display = "block";
        detalleGrupo.innerHTML = renderGrupoDetalle(grupo, ubigeo);

    }  
});


