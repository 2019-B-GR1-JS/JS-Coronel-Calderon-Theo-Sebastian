// /*
// Un callBack es cuando se manda una funcion como parametro
//  */
//
// function calculo(numUno, numDos, funcionCalculo){
//     const total = numUno + numDos;
//     return funcionCalculo(numUno,numDos,total);
// }
//
// const numeroUno = 3;
// const numeroDos = 5;
//
// const suma= (numUno, numDos,total)=> {
//     return total;
// };
//
// console.log(suma);  //Definicion FUNCTION
// console.log(suma(1,2,3));   //Se ejecuta la FX
//
// const resultadoCalculo = calculo(numeroUno, numeroDos, suma);
//
// console.log(resultadoCalculo);
//
// function forEachLocal(arreglo, funcion) {
//     for(let i = 0; i<arreglo.length; i++){
//         funcion(arreglo[i], i,arreglo);
//     }
// }
//
// const arreglo = [1,2,3,4,5,6,7,8,9,10];
//
// forEachLocal(arreglo, (valorActual, indiceActual, arreglo)=>{
//     //console.log('valor Actual', valorActual);
// });
//
// // const respuestaMap = arreglo
// //     .map(   //Transformar -> Mutar ARREGLO
// //         function (valorActual){
// //             return valorActual +5;
// //         }
// //     );  // Devuelve un NUEVO arreglo TRANSFORMADO
//
//     function mapLocal(arreglo, funcion){
//         arregloN=[];
//         for(let i = 0; i<arreglo.length; i++){
//             arregloN.push(funcion(arreglo[i]));
//         }
//         return arregloN;
//     }
//
//     const respuestaMap=mapLocal(arreglo, (valorActual)=>{
//         return valorActual*1;
//     }
//     );
//     //console.log(respuestaMap);
//
//

const arregloPuro = [1,2,3,4,5,6,7,8,9,10,11];

    function FilterLocal(arreglo,funcion){
        arregloN=[];
        for(let i = 0; i<arreglo.length; i++){
            if(funcion(arreglo[i])!=false) arregloN.push(arreglo[i]);
        }
        return arregloN;
    }

console.log( 'FILTER: ',
    FilterLocal(arregloPuro,(valorActual)=>{
        //let aux=();
        return valorActual>5;
    })
);


    function someLocal(arreglo, funcion){
        for(let i = 0; i<arreglo.length; i++){
            if(funcion(arreglo[i])===true) return true;
        }
        return false;
    }

console.log( 'SOME: ',
    someLocal(arregloPuro,(valorActual)=>{
        return valorActual>5 && valorActual<9;
    })
);


function everyLocal(arreglo, funcion){
    for(let i = 0; i<arreglo.length; i++){
        if(funcion(arreglo[i])===false) return false;
    }
    return true;
}

console.log( 'EVERY: ',
    everyLocal(arregloPuro,(valorActual)=>{
        return valorActual>5 && valorActual<9;
    })
);


function findLocal(arreglo, funcion){
    for(let i = 0; i<arreglo.length; i++){
        if(funcion(arreglo[i])===true) return arreglo[i];
    }
    return undefined;
}

console.log( 'FIND: ',
    findLocal(arregloPuro,(valorActual)=>{
        return valorActual===8;
    })
);


function findIndexLocal(arreglo, funcion){
    for(let i = 0; i<arreglo.length; i++){
        if(funcion(i)===true) return arreglo[i];
    }
    return -1;
}

console.log( 'FIND IND: ',
    findIndexLocal(arregloPuro,(valorIndice)=>{
        return valorIndice==8;
    })
);


function ReduceLocal(arreglo, funcion){
    let value;
    for(let i = 0; i<arreglo.length; i++){
         value = funcion(arreglo[0],arreglo[i])
    }
    return value;
}

console.log( 'REDUCE: ',
    ReduceLocal(arregloPuro,(valorInicial, valorActual)=>{
        return valorInicial + valorActual;
    })
);
