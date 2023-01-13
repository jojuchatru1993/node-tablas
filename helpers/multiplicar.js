const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';

        for(let i = 1; i <= hasta; i++) {    
            salida += `${base} * ${i} = ${base*i}\n`;
        }

        if(listar) {
            console.log('==================='.red);
            console.log(colors.yellow('   Tabla del:'), colors.blue(base));
            console.log('==================='.red);

            console.log(salida.rainbow);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `Tabla del ${base}`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}