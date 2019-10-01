//  JSON

//var nombre=THEO;

//mutable
//MUTABLE (no queremos)
/*let nombre="THEO";
nombre= "Sebastian";
nombre = 1;*/

//no mutable: (no cambia)
const cedula = 1723121669;
const mensaje = `
Siempre usar "const"
Si ya toca usar "let"
Nunca vamos a usar "var"
`;

//Datos primitivos
//LINT
let nombre = "Theo";
console.log(typeof nombre, 'nombre');
let numeros = 1;
console.log(typeof numeros, 'numeros');
numeros = 1.1;
console.log(typeof numeros, 'numeros decimales');
let casados = false;
console.log(typeof casados, 'casados');
let hijos = null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');

//TRUTY & FALSY
if ({}) {
    console.log("truty");
} else {
    console.log("falsy");
}

//JSON - JS
const theo = {
    "nombre": 'Theo',
    "apellidos": 'Coronel',
    edad: 23,
    casado: false,
    hijos: null,
    hermana: {
        nombre: "Liseth",
    },
    mascotas:[
        {
            nombre: "Luca",
        }
    ],
};

console.log(theo.nombre);
console.log(theo.hermana);
console.log(theo.mascotas);
console.log(theo.mascotas[0]);
console.log(theo.mascotas[0].nombre);

theo.sueldo=55;
theo["deudas"] = 1000;


console.log(theo);
console.log("-------------------------");
delete theo.hijos;
console.log(theo);
