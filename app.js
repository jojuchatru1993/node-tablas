const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'Creado correctamente'.blue))
    .catch(err => {
       console.log(err) ; 
    });
