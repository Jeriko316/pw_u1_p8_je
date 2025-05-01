const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;

    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }

    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }

    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(num1, num2);
    }

    if (tipo === DIVISION) {
        resultado = dividir(num1, num2);
    }

    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();


}


const fundamentos = () => {
    console.log('FUNDAMENTOS JS');
    /*tipos de variables 
     var: es antiguo, obsoleto 
     let  -> soporta cualquier tipo de dato / es para variables cambiantes
     const -> para variables constantes
     */

    let nombre = 'erick'
    let numero = 10;
    let arreglo = [1, 2, 3, 4, 5];

    const nombrec = '10';

    console.log(arreglo);
    console.log('texto de prueba');
}


/*Arreglos*/
const diasLaborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(diasLaborables);
console.log(diasLaborables[4]);
console.log(diasLaborables[10]);
let valor = '';
console.log(valor);

diasLaborables.push('Sabado');
diasLaborables.unshift('Dias');
console.log(diasLaborables);


const numerosImpares = [1, 3, 5, 7, 9];
const numerosPares = [2, 4, 6, 8, 10];

const numeros = numerosImpares.concat(numerosPares);
console.log(numeros);

/*Sentencias de control*/
for (const dia of diasLaborables) {
    console.log(dia);
    if (dia === 'viernes') {
        console.log('por fin viernes');
    } else {
        console.log('aun no es viernes mmv');
    }

    if (dia !== 'viernes') {
        console.log('dia normal de camello');
    } else {
        console.log('Dia de salida y farra');
    }
}


/*Manejo de Objetos*/
const miProfesor = {
    nombre: 'erick',
    apellido: 'enriquez',
    edad: 20,
    genero: 'masculino',
    ciudad: 'guayaquil'
}

console.log(miProfesor);

console.log(miProfesor.nombre);

/*Seteo de atributos*/
miProfesor.apellido = 'chanaluisa';

console.log(miProfesor);

if (miProfesor.ciudad === 'guayaquil') {
    console.log('ES MONO');
}

const estudiante1 = {
    nombre: 'carlos',
    apellido: 'saenz',
    edad: 20,
    genero: 'masculino',
    ciudad: 'cuenca'
}

const estudiante2 = {
    nombre: 'ana',
    apellido: 'luisa',
    edad: 20,
    genero: 'femenino',
    ciudad: 'guayaquil'
}

const estudiante3 = {
    nombre: 'aquiles',
    apellido: 'castro',
    edad: 20,
    genero: 'masculino',
    ciudad: 'quito'
}
const arregloEst = [estudiante1, estudiante2, estudiante3]
console.log(arregloEst);
console.table(arregloEst);

const ciudadano = {
    nombre: 'Erick',
    apellido: 'Enriquez',
    direccion: {
        callePrincipal: 'Av. America',
        calleSecundaria: 'Av. La Gasca',
        numeracion: '5620',
        barrio: {
            referencia: 'Frente al dilipa'
        }
    }
}

console.log(ciudadano);
console.log(ciudadano.nombre);
console.log(ciudadano.direccion);
console.log(ciudadano.direccion.callePrincipal);
ciudadano.direccion.callePrincipal = 'Av Amazonas';
console.log(ciudadano)

//forma 1
const est1 = {
    nombre: 'Erick2'
}

const est2 = {
    nombre: 'JHON'
}


const arregloEst2 = [est1, est2];
console.log(arregloEst2);

//forma 2
const arregloEst3 = [{ nombre: 'Carla', apellido: 'Castillo' }, { nombre: 'edison', apellido: 'Cayamabre' }, { nombre: 'marlon', apellido: 'Gaulpa' }];
console.log(arregloEst3);

console.log(arregloEst3[2].apellido);

//Desestructuracion de Arreglos
const colores = ['amarillo', 'azul', 'naranja', 'verde', 'violeta'];
const [c1, c2, c3, c4, c5] = colores;
console.log(c1);
console.log(c5);

const [cUno, cDos] = colores;
console.log(cUno, cDos);

const [, , cTres] = colores;
console.log(cTres);

//DE MANERA DIRECTA
const [c01, c02] = ['turquesa', 'azul', 'naranja', 'verde', 'gris'];
desestructuracionArreglos(colores);
const valor2 = desestructuracionArreglos2();
//destrucuracion
const [, p2, p3] = desestructuracionArreglos2();
console.log(p2);
console.log(p3);


//DESESTRUCTURACION POR OPERADOR REST
console.log('DESESTRUCTURACION POR OPERADOR REST');
const [p1,...resto] = desestructuracionArreglos2();
console.log(p1);
console.log(resto);

//DESETRUCURACION DE OBJETOS
const auto = {
    marca: 'TOYOYA',
    modelo: 'Prius',
    anio: 2020,
    color: 'amarillo'
}

const { marca, color, anio } = auto;
console.log(auto);


const { anio1 } = {
    marca1: 'TOYOYA',
    modelo1: 'Prius',
    anio1: 2020,
    color1: 'amarillo'
}

console.log(anio1);

desestructuracionObjeto(auto);

const universidad = {
    nombre: 'UCE',
    direccion: 'aMERICA',
    rector: {
        nombreR: 'Patricio',
        apellidoR: 'Teran',
    }
}

const {rector, nombreR} = universidad;
console.log(rector);

const {apellidoR} = rector;
console.log(apellidoR);


const universidad2 = {
    nombre2: 'UCE',
    direccion2: 'aMERICA',
    rector2: {
        nombreR2: 'Patricio',
        apellidoR2: 'Teran',
    }
}


const {nombre2, rector2:{nombreR2}} = universidad2;
console.log(nombreR2);





/*function desestructuracionArreglos (arreglo) {
    console.log(arreglo);
}*/

function desestructuracionArreglos([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);
}


function desestructuracionArreglos2() {
    const colores = ['turquesa', 'azul', 'naranja', 'verde', 'gris'];
    return colores;
}

/*function desestructuracionObjeto(Objeto) {
    console.log(Objeto);
}*/

function desestructuracionObjeto({ marca, color }) {
    console.log(marca);
    console.log(color);
}


