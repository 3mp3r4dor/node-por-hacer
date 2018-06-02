// const argv = require('yargs').argv;
const { argv } = require('./config/yargs');
const { crear, guardarDB, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = getListado();
        for (let tarea of listado) {
            console.log('=========================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        // console.log('Actualiza una tarea por hacer');
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No se encuentra el comando');
}