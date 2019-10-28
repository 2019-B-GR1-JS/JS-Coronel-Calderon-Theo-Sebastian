/*************************************************** 04-funciones****/

function imprimirMensaje(mensaje) {
    if (typeof mensaje === 'string' || typeof mensaje === 'number') {
        // console.log(`Mensaje ${mensaje}` );
        // console.log('Mensaje '+ mensaje );
        const impresion = `Mensaje ${mensaje}`;
        return impresion;
    } else {
        console.error("Error");
    }
}

const respuesta = imprimirMensaje('valores valores');
const respuesta2 = imprimirMensaje({a: 1});

// console.log(respuesta);

function sumarDosElementos(a, b) {
    return a + b;
}

console.log(
    sumarDosElementos(4, 6)
);


function sumarElementos(numeroUno, ...arregloParamsInfinitos) {
    console.log(arregloParamsInfinitos);
    if (arregloParamsInfinitos) {
        // arregloParamsInfinitos.reduce((a,b)=>a+b,numeroUno);
        return arregloParamsInfinitos.reduce(
            (valorInicial, valorActual) => {
                return valorInicial + valorActual;
            },
            numeroUno
        )
    } else {
        return numeroUno;
    }
}

const suma = sumarElementos(1, 2, 3, 4, 5, 6);
console.log(suma);

const restar = function restarF(a, b) {
    return a - b;
};

const restarNumeros = function (a, b) {
    return a - b;
};

//fat arrow function =>Anonymous function
const restar2 = (a, b) => {
    return a - b;
};

const restar1 = {
    nombre: 'restar',
    restarNUmeros: (a, b) => {
        return a - b;
    },
    restarNUmeros: function (a, b) {
        return a - b;
    },
};

const transfomarMayus = (letra) => {
    return letra.toUpperCase();
};

const transfomarMayus1 = (letra) => letra.toUpperCase();
const transfomarMayus2 = letra => letra.toUpperCase();

// const filtrarArreglo = arreglo.filter(a =>a.id > 4);

const arregloNumerosUno = [1, 2, 3, 4, 5, 6];
const arregloNumerosDos = [7, 8, 9, 10, 11, 12];

const arregloUnido = [...arregloNumerosUno, ...arregloNumerosDos];
console.log(`Uso de destructura `, arregloUnido);

//DESTRUCTURAR UN ARREGLO
sumarElementos(...arregloNumerosUno);
sumarDosElementos(...arregloNumerosUno);

//sumarElementos([1,2,3,4,5,6]);
// console.log(restarF);

const objetoTheo = {
    nombre: "Theo",
};
const objetoCoronel = {
    apellido: "Coronel",
};

const objetoTheoCoronel = {
    ...objetoTheo,
    ...objetoCoronel,
    edad:12,
};

console.log("MAGIA JSON ", objetoTheoCoronel);

//CLONACION DE UN OBJETO
const oTCEnString = JSON.stringify(objetoTheoCoronel);
console.log(oTCEnString);
const oTCClonado = JSON.parse(oTCEnString);
console.log(oTCEnString);
oTCEnString.edad=21;
console.log(oTCClonado);
console.log(objetoTheoCoronel);

//PERO MÁS FACIL
const clonadoTC={
    ...objetoTheoCoronel
};
console.log("Clones", clonadoTC);
clonadoTC.edad=55;
console.log(clonadoTC);
console.log(objetoTheoCoronel);

//Lo mejor que se puede hacer para clonar es hacer una funcion
function cambiarEdad(edad,objeto){
    objeto.edad=edad;
    return objeto;
}



