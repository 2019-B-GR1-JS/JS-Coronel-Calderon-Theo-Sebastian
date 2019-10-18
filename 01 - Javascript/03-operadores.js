const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Object.keys(arreglo));

/****
 * Es preferible utilizar estos for..  Aunque el FOR original sea más rápido
 * pues al momento de dar mantenimiento a un sistema no tenemos que preocuparnos
 * por las funciones..
 */

// for (const i in arreglo) {   //Este For recorre los indices
//     console.log('I:', i);
// }
//
// for (const i of arreglo) {   //Este For recorre los valores
//     console.log('i:', i);
// }
//
// const respuestaForEach = arreglo
//     .forEach(
//         function (valorActual) {
//             console.log('valorActual', valorActual);
//             // console.log('indiceActual',indiceActual);
//             // console.log('arreglo',arreglo);
//         }
//     );
//
// console.log('respuestaForEach', respuestaForEach);


// for (const i in arreglo) {
//     arreglo[i] = arreglo[i] + 5;
// }
// console.log(arreglo);


const respuestaMap = arreglo
    .map(   //Transformar -> Mutar ARREGLO
        function (valorActual){
            return valorActual +5;
        }
    );  // Devuelve un NUEVO arreglo TRANSFORMADO

const respuestaMap2 = arreglo.map(r=>r+5);

console.log('respuestaMap',respuestaMap);
console.log('respuestaMap2',respuestaMap2);
console.log('arreglo',arreglo);

const reto = arreglo.map(a=>a>7);
console.log('reto',reto);

const respuestaFilter = arreglo
    .filter(
      function (valorActual) {
          return valorActual>7;
      }
    );
console.log('respuestaFilter',respuestaFilter);

const respuestaFilter2 = arreglo
    .filter(
        function (valorActual) {
            return valorActual>9 && valorActual<12;
        }
    );
console.log('respuestaFilter2',respuestaFilter2);

const respuestaSome =  arreglo
    .some(
      function (valorActual) {
          return valorActual>11 && valorActual<12;
      }
    );
console.log('respuestaSome',respuestaSome);

const respuestaEvery = arreglo
    .every(
      function (valorActual) {
          return valorActual>1;
      }
    );
console.log('respuestaEvery',respuestaEvery);

//  (x/2 + 7 ) ?<10

const reto2 = arreglo
    .map( x => (x/2)+7).some( y => y<10 );

console.log('reto2',reto2);

const reto3 = arreglo
    .map( x => (x/2)+7).filter( y => y<10 );

console.log('reto3',reto3);

