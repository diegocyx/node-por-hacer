const dscrp = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    }
}

const actlzr = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', dscrp)
    .command('actualizar', 'Actualiza el estado completo de una tarea', actlzr)
    .command('borrar', 'Borrar elemento por hacer', dscrp)
    .help()
    .argv;




module.exports = {
    argv
}