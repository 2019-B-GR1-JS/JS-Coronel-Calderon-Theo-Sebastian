/*************************************************** 07-promesas****/

const fs = require('fs');

const sumarDosNumeros = (correcto) => {
    return new Promise(
        (resolve, reject) => {
            if(correcto){
                resolve(`YEII`);
            }else{
                reject ('Buuu');
            }
        }
    );
};


const promesaSumarDosNumeros = sumarDosNumeros(false);
console.log('01. INICIAR');

promesaSumarDosNumeros
    .then(
        (ok) => {
            console.log('OK',ok);
        }
    )
    .catch((error) => {
            console.log('Error',error);
        }
    );



console.log('---------------------------------------------');


const leerArchivo = (pathArchivo)=>{
    return new Promise(
        (resolve, reject)=>{
            //  RES         REJ
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => {   //CallBack
                    if(error){
                        reject(error);
                    }else{
                        resolve(archivoLeido);
                    }
                }
            );
        }
    );
};



const promesaLecturaArch = leerArchivo('./05-callBacks.js');

promesaLecturaArch
    .then(
        (contenidoCallbackjs)=>{
            console.log(contenidoCallbackjs);
            return leerArchivo('./04-funciones.js' )    //PROMESA
        }
    )
    .then(
        (contenidoFuncionesjs)=>{
            console.log(contenidoFuncionesjs);
            return leerArchivo('./03-operadores.js')
        }
    )
    .then(
        (contenidoOperadoresjs)=>{
            console.log(contenidoOperadoresjs);
        }
    )
    .catch((error) => {
            console.log('Error',error);
        }
    );






