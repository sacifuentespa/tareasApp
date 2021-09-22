const fs = require('fs');
const notas = require("./notas.json")


const escribirJSON = (entryArray) => {
    const grade = JSON.stringify(entryArray, null, 4)
    fs.writeFileSync('./notas.json', grade)
}


const guardarTarea = (tareaGuardar) => {
    let tarea = tareaGuardar.tarea
    let estado = tareaGuardar.estado
    const newGrade = {
        tarea: tarea,
        estado: estado,
    }

    const currentDatabase = notas
    currentDatabase.push(newGrade)
    escribirJSON(currentDatabase)
}


const filtrarPorEstado = function (estado) {
    let nonFiltered = notas
    let filtered = nonFiltered.filter(item => item.estado == estado)
    return console.log(filtered)
}
//Se había realizado el trabajo previo con if en vez de switch
/*
function listados(listar, nameSubject) {

    if (listar == "listar") )
    }
    else if (listar == "crear") {
        let newSubject = nameSubject.toString()

        newHomework = {
            tarea: newSubject,
            estado: "pendiente",
        }
        guardarTarea(newHomework)
    }

    else if (listar == undefined) {
        console.log("Atención - Tienes que pasar una acción")
    } else {
        console.log("No entiendo qué quieres hacer")
    }
}
*/

function listados(){
    notas.forEach(function (item) {
        console.log(item)
    })
}
module.exports = { listados, escribirJSON, guardarTarea, filtrarPorEstado }