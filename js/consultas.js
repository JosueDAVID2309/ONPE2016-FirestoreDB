import { db } from './conexion.js';
import { getDocs, collection, where, query, orderBy } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// export const getVotosNacionales = async () =>{
//     const vNacionales = await getDocs(collection(db, "votosNacional"));
//     return vNacionales.docs.map( votos => ({
//         ...votos.data()
//     }));
// }

// export const getVotosExtranjeros = async () => {
//     const vExtranjeros = await getDocs(collection(db, "votosExtranjero"));
//     return vExtranjeros.docs.map(votos => ({
//         ...votos.data()
//     }));
// }

export const getVotosDepartamento = async (id) => {
    const q = query(collection(db, "participacion_departamento")/*, orderBy("DPD","desc")*/ , where("ID", "==", id))
    const votosD = await getDocs(q)
    return votosD.docs.map(votos =>({
        ...votos.data(),
        nivel: "Departamento"
    }))
}

export const getVotosProvincia = async (id) => {
    const q = query(collection(db, "participacion_provincia")/*, orderBy("DPD","desc")*/ , where("Departamento", "==", id))
    const votosP = await getDocs(q)
    return votosP.docs.map(votos =>({
        ...votos.data(),
        nivel: "Provincia"
    }))
}

export const getVotosDistritos = async (id) => {
    const q = query(collection(db, "participacion_distrito"), where("Provincia", "==" ,id))
    const votosDi = await getDocs(q)
    return votosDi.docs.map(votos =>({
        ...votos.data(),
        nivel: "Distrito"
    }))
}

export const getDistrito = async (distrito, provincia) =>{
    const q = query(collection(db, "participacion_distrito"),
    where("Provincia", "==" ,provincia),
    where("DPD","==",distrito))
    const votosDi = await getDocs(q)
    return votosDi.docs.map(votos =>({
        ...votos.data(),
        nivel: "Distrito"
    }))
}

export const getTotal = (votos) => {
    const total = {
        DPD: "TOTAL",
        EH: 0,
        TV: 0,
        TA: 0,
        PTV: "0%",
        PTA: "0%"
    };

    votos.forEach(v => {
        const EH = parseInt(v.EH.replace(/,/g, "")) || 0;
        const TV = parseInt(v.TV.replace(/,/g, "")) || 0;
        const TA = parseInt(v.TA.replace(/,/g, "")) || 0;

        total.EH += EH;
        total.TV += TV;
        total.TA += TA;
    });

    if (total.EH > 0) {
        total.PTV = ((total.TV / total.EH) * 100).toFixed(2) + "%";
        total.PTA = ((total.TA / total.EH) * 100).toFixed(2) + "%";
    }

    return total;
};

