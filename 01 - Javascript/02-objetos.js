/*************************************************** 02-objetos ****/

//  let const
// deben ser INMUTABLES!  sig

const arregloNumber=[1,2,3,4];
// arregloNumber=['a',"b",'c'];
// arregloNumber=[true,false,1,'a'];
// arregloNumber=1;

//excelente idea usar constantes para evitar cometer errores
//tiene que ser tipado para que las variables no sean mutables

const arreglo=[1,2,4,3,4,5,6,7,8,9,10];
console.log('arreglo',arreglo);
arreglo.push(11);
console.log('arreglo',arreglo);
arreglo.pop();
console.log('arreglo',arreglo);
arreglo.splice(1,0,1.1,1.2,1.3);
console.log('arreglo',arreglo);
arreglo.unshift(0,0.1,0.2);
console.log('arreglo',arreglo);
arreglo.shift();
console.log('arreglo',arreglo);
const respuestaIndice = arreglo.indexOf(4);
console.log(respuestaIndice);
arreglo.splice(respuestaIndice,1);
console.log('arreglo',arreglo);
