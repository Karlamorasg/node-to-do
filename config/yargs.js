const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca'
    
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento pr hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado', descripcion, completado)
    .command('borrar', 'Borra una tarea',descripcion)
    .help()
    .argv;


module.exports = {
    argv
}