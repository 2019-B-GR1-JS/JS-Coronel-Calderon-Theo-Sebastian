/*************************************************** 06-sync****/

//Programación asincrona y sincrona

const fileSystem = require('fs');
console.log('1) Iniciando');

// const archivos=[
//     './05-callBacks.js',
//     './04-funciones.js',
//     './03-operadores.js',
//     './02-objetos.js',
//     './01-variables.js',
// ];

// for (let i of archivos){
fileSystem.readFile(
    './05-callBacks.js',
    'utf8',
    callbackLeerArchivo
    // () => { //CALLBACK  no se ejecuto al principio
    // }
);

// }

function callbackLeerArchivo(error, datos) {
    if (error) {
        console.error(
            {
                mensaje: 'Error leyendo archivo',
                // error:error,
                error,
            }
        )
    } else {
        console.log('Datos: ', datos);
        fileSystem.readFile(
            './04-funciones.js',
            'utf8',
            callbackLeerArchivo2
        );
    }
}


function callbackLeerArchivo2(error, datos) {
    if (error) {
        console.error(
            {
                mensaje: 'Error leyendo archivo',
                // error:error,
                error,
            }
        )
    } else {
        console.log('Datos: ', datos);
        fileSystem.readFile(
            './03-operadores.js',
            'utf8',
            callbackLeerArchivo3
        );
    }
}

function callbackLeerArchivo3(error, datos) {
    if (error) {
        console.error(
            {
                mensaje: 'Error leyendo archivo',
                // error:error,
                error,
            }
        )
    } else {
        console.log('Datos: ', datos);
        fileSystem.readFile(
            './02-objetos.js',
            'utf8',
            callbackLeerArchivo4
        );
    }
}

function callbackLeerArchivo4(error, datos) {
    if (error) {
        console.error(
            {
                mensaje: 'Error leyendo archivo',
                // error:error,
                error,
            }
        )
    } else {
        console.log('Datos: ', datos);
        fileSystem.readFile(
            './01-variables.js',
            'utf8',
            callbackLeerArchivo5
        );
    }
}


function callbackLeerArchivo5(error, datos) {
    if (error) {
        console.error(
            {
                mensaje: 'Error leyendo archivo',
                // error:error,
                error,
            }
        )
    } else {
        console.log('Datos: ', datos);
    }
}


// console.log('2) Finalizado');


/*fileSystem.readFile(
    './05-callBacks.js',
    'utf8',
    (error, datos)=> {
        if (error) {
            console.error(
                {
                    mensaje: 'Error leyendo archivo',
                    // error:error,
                    error,
                }
            )
        } else {
            console.log('Datos: ', datos);
            fileSystem.readFile(
                './04-funciones.js',
                'utf8',
                (error, datos)=> {
                    if (error) {
                        console.error(
                            {
                                mensaje: 'Error leyendo archivo',
                                // error:error,
                                error,
                            }
                        )
                    } else {
                        console.log('Datos: ', datos);
                        fileSystem.readFile(
                            './03-operores.js',
                            'utf8',
                            (error, datos)=> {
                                if (error) {
                                    console.error(
                                        {
                                            mensaje: 'Error leyendo archivo',
                                            // error:error,
                                            error,
                                        }
                                    )
                                } else {
                                    console.log('Datos: ', datos);
                                    fileSystem.readFile(
                                        './02-objetos.js',
                                        'utf8',
                                        (error, datos)=> {
                                            if (error) {
                                                console.error(
                                                    {
                                                        mensaje: 'Error leyendo archivo',
                                                        // error:error,
                                                        error,
                                                    }
                                                )
                                            } else {
                                                console.log('Datos: ', datos);
                                                fileSystem.readFile(
                                                    './01-variables.js',
                                                    'utf8',
                                                    (error, datos)=> {
                                                        if (error) {
                                                            console.error(
                                                                {
                                                                    mensaje: 'Error leyendo archivo',
                                                                    // error:error,
                                                                    error,
                                                                }
                                                            )
                                                        } else {
                                                            console.log('Datos: ', datos);
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        }
    }
    // () => { //CALLBACK  no se ejecuto al principio
    // }
);*/










