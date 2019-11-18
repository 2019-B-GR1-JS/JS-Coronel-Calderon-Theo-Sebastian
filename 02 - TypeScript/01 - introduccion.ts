// Transpilador
// Tipo de compilador que transforma de un lenguaje a otro
//TYPESCRIPT

//1) Tipos de datos (TIPADOS)
//2) DECORADORES
//3) CLASES

//const numero = 0 ;

const numero: number =0;
//const nombre: string = '0';

//DUCK TYPING
//INFIERE EL TIPO DE DATO
let nombre: string = "Theo";
// nombre = 22;     ERROR

let fecha: Date;    //Date -> Clase
                    //Tipo de dato "Date"
fecha = new Date();

let theo:Estudiante; // Interfaz

theo={
    nombre: "Sebastian",
    edad: 23
};

 interface Estudiante {
     nombre: String;
     edad: number;
 }

function holaMundo():void {
    console.log('HOla');
}

function mensaje(nombre:string):void {
    console.log('HOla', nombre);
}

function calculadora(numUno:number, ...numeros:number[]):number {
    console.log('Hacer calculadora');
    return numUno;
}

function universidad(
    nombre:string,
    edad?:number,        //OPCIONAL
):string{
     return `${nombre} Edad: ${edad}`;
}

universidad("EPN",150);
// universidad("EPN");

interface Facultad{
    nombre: string;
    id: number;
}

interface Departamento {
    nombre:string;
    id:number;
    facultad: Facultad | number;
}

const departamentoSistemas = {
    nombre:"Sistemas",
    id:1,
    facultad:{ // Facultad esta relacionada
        nombre:"Sistemas",
        id:1
    }
};

const departamentoSistemasSinRelaciones :Departamento  = {
    nombre:"Sistemas",
    id:1,
    facultad: 1
};


function imprimirDepartamento(
    departamento:Departamento
){
    const departamentoId = departamento.facultad as number + 1;
    // const departamentoId = <number>departamento.facultad + 1;
}