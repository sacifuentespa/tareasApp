
const logic = require ('./tareas')

let listas = process.argv[2]
let creacion = process.argv[3]
let estado = process.argv[3]


switch(listas){
    case 'listar' :
       logic.listados();
        break;
    case undefined:
        console.log('Atención: Tienes que pasar una acción');
        break;
    case 'crear':
        let newHomework ={ 
            tarea: creacion,
            estado: "pendiente",
        }
        logic.guardarTarea(newHomework);
        break
    case 'filtrar' :
        logic.filtrarPorEstado(estado);
        break
    default:
        console.log('No entiendo que quieres hacer');
    break
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
/*
console.log(logic.filtrarPorEstado("pendiente"))

logic.listados()*/