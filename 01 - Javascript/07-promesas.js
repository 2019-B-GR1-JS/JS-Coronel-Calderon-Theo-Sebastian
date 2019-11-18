/*************************************************** 07-promesas****/
//File Systemx
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

/*
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
*/

console.log('Inicia Sincrono');
const nombreArchivo = './05-callbacks.js';
//AL USAR SINCRONO SIEMPRE SE DEBE TENER TRY CATCH
try{
    const contenidoArchivo= fs.readFileSync(nombreArchivo);
    console.log(contenidoArchivo);
    console.log('Se leyo sincronamente');

}catch(e){
    console.error('Error: ',error);
}
console.log('Termina Sincrona');


//Transformar promesa a codigo SINCRONO
//Funciones normales o funciones anonimas

//1) ASYNC nos permite usar codigo sincrono dentro de una funcion
//2) Para transformar PROMESA -> SINCRONO
// "await"

async function leerArchivoSync(){
    try{
        const contenido= await leerArchivo(nombreArchivo);  //PROmesa
        console.log(contenido);
        console.log('LEIMOS CON ASYNC AWAIT');
        return 1;
    }catch (error){
        console.eror ('Error ', error);
        return 0;
    }
}

//TODA FUNCION QUE TENGA ASYNC SE TRANSFORMA EN UNA PROMESA

leerArchivoSync().then(
    (numero)=>{
        console.log(numero);    //1

    }
).catch(
    (numero)=>{
        console.log(numero);    //0
    }
);//PROMESA