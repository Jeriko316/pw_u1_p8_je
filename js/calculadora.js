/*const SUMA = '+';
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


function fundamentos () {
    console.log('FUNDAMENTOS JS');
    /*tipos de variables 
     var: es antiguo, obsoleto 
     let  -> soporta cualquier tipo de dato / es para variables cambiantes
     const -> para variables constantes
     */

   /* let nombre = 'erick'
    let numero = 10;
    let arreglo = [1, 2, 3, 4, 5];

    const nombrec = '10';

    console.log(arreglo);
    console.log('texto de prueba');
//}


/*Arreglos*/
/*const diasLaborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
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
/*for (const dia of diasLaborables) {
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
/*const miProfesor = {
    nombre: 'erick',
    apellido: 'enriquez',
    edad: 20,
    genero: 'masculino',
    ciudad: 'guayaquil'
}

console.log(miProfesor);

console.log(miProfesor.nombre);

/*Seteo de atributos*/
/*miProfesor.apellido = 'chanaluisa';

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

const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 21,
        ciudad: 'Quito'
    },
    {
        nombre: 'María',
        apellido: 'González',
        edad: 22,
        ciudad: 'Guayaquil'
    },
    {
        nombre: 'Pedro',
        apellido: 'Sánchez',
        edad: 23,
        ciudad: 'Cuenca'
    }
];
console.log(estudiantes);
console.log(estudiantes[0].nombre);
console.table(estudiantes);



const fundamentosJS = () =>{
    const ciudadanos = {
        nombre: 'Pepito',
        apellido: 'Perez',
        direccion: {
            callePrincipal: 'Av Siempre Viva',
            calleSecundaria: 'Av Fransico de Orellana',
            numeracion: '5620',
            barrio: {
                referencia: 'frente al tuti'
            }
        }
    }

    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    console.direccion.callePrincipal = 'Av. Amazonas';
    console.log(ciudadano);

    const est1 = {
        nombre: 'erick'

    }

    const est2 = {
        nombre: 'jhon'
    }

    const arregloEstudiantes = [est1, est2];
    console.log(arregloEstudiantes);

    const arregloEstudiantes2 = [{ nombre: 'carla', apellido: 'Castillo' }, { nombre: 'fatima', apellido: 'paez' }];
    console.log(arregloEstudiantes2);

    console.log(arregloEstudiantes2[1].apellido);

    //Desestructuracion de arreglos
    const colores = ['rojo', 'verde', 'azul', 'amarillo'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);
    console.log(c5);

    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);

    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    desectructuracionArreglo(colores);
    //const valor = desectructuracionArreglo2;
    //console.log(valor);
    //const [,p2,p3] = desectructuracionArreglo2(colores);
    //console.log(p2);

    const[,p2,p3,p4,p5,p6,p7,p8] = desectructuracionArreglo2(colores);
    console.log(p2);
    console.log(p3);

    //destructuracion de objetos
    const auto ={
        marca: 'toyota',
        modelo: 'corolla',
        anio: 2020,
        color: 'rojo'
    }

    const {} = auto;
    console.log(color);

    const {anio1} = {
        marca1
    }

}


function desectructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);

}

function desectructuracionArreglo2([c1, c2, c3]) {
    const colores = ['Rosado', 'verde', 'azul', 'amarillo'];
    return colores;

}

function desectructuracionArreglo3([c1, c2, c3]) {
    const colores = ['Rosado', 'verde', 'azul', 'amarillo'];
    return colores;
}*/

const SUMA = '+';

const RESTA = '-';

const MULTIPLICACION = '*';

const DIVIDIR = '/';
 
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

    if (tipo === DIVIDIR) {

        resultado = dividir(num1, num2);

    }

    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
 
    return resultado;

}
 
const fundamentos = () => {

    console.log('Fundamentos JS');
 
    /*Tipos de variables

    var:antiguo

    let: variables cambiantes

    const: variables constantes 

    */
 
    let nombre = 'David';

    let numero = 10;

    let arreglo = [1, 2, 3, 4, 5];
 
    const nombreC = '10';
 
    console.log(nombre);
 
    /*Arreglos */

    const diasLaborales = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    console.log(diasLaborales);

    console.log(diasLaborales[2]);
 
    let valor = '';

    console.log(valor);
 
    diasLaborales.push('Sabado'); //Agrega al final

    diasLaborales.unshift('Domingo'); //Agrega al inicio
 
    console.log(diasLaborales);
 
    const numeroImpares = [1, 3, 5, 7, 9];

    const numeroPares = [2, 4, 6, 8];
 
    const numeros = numeroPares.concat(numeroImpares); //Concatenar

    console.log(numeros);
 
    /*Sentencias de control*/

    for (const dia of diasLaborales) {

        console.log(dia);

        if (dia === 'Viernes') {

            console.log('Al fin viernes');

        } else {

            console.log('No es viernes');

        }
 
        console.log(dia);

        if (dia !== 'Viernes') {

            console.log('Dia normal de clases');

        } else {

            console.log('Dia de salida');

        }

    }
 
    /*Manejo de objetos*/

    const miProfesor = {

        nombre: 'David',

        apellido: 'Llumiquinga',

        edad: 26,

        genero: 'Masculino',

        ciudad: 'Quito'

    }
 
    console.log(miProfesor);
 
    console.log(miProfesor.apellido);
 
    //Seteo de atributos

    miProfesor.apellido = 'Arevalo';
 
    console.log(miProfesor);
 
    if (miProfesor.ciudad === 'Quito') {

        console.log('Es la capital');

    }
 
    const estudiante = {

        nombre: 'David',

        apellido: 'Llumiquinga',

        edad: 27,

    }
 
    const estudiante1 = {

        nombre: 'Andrea',

        apellido: 'Arevalo',

        edad: 24,

    }
 
    const estudiante2 = {

        nombre: 'Valentina',

        apellido: 'Llumiquinga',

        edad: 1,

    }
 
    let estudiantes = [estudiante, estudiante1, estudiante2];

    console.table(estudiantes);
 
    const ciudadano = {

        nombre: 'David',

        apellido: 'Llumiquinga',

        direccion: {

            callePrincipal: 'Av. America',

            calleSecundaria: 'Av. La Gasca',

            numeracion: '5620',

            barrio: {

                referencia: 'Frente al Dilipa'

            }

        }

    }
 
    console.log(ciudadano);

    console.log(ciudadano.nombre);

    console.log(ciudadano.direccion);

    console.log(ciudadano.direccion.callePrincipal);

    ciudadano.direccion.callePrincipal = 'Av. Amazonas';

    console.log(ciudadano);
 
    const est1 = {

        nombre: 'David'

    }

    const est2 = {

        nombre: 'Andrea'

    }
 
    est1.nombre = 'Isabella';
 
    const arregloEstudiantes = [est1, est2];

    console.log(arregloEstudiantes);
 
    const arregloEstudiantes2 = [{ nombre: 'Valentina', apellido: 'Llumiquinga' }, { nombre: 'Andres', apellido: 'Llumiquinga' }];

    console.log(arregloEstudiantes2);
 
    console.log(arregloEstudiantes2[1].apellido);
 
    //Desestructuracion de arreglos: Se hace a traves de sus posiciones
 
    const colores = ['amarillo', 'azul', 'rojo', 'verde', 'naranja'];

    const [c1, c2, c3, c4, c5] = colores;

    console.log(c1);

    console.log(c5);
 
    const [cUno, cDos] = colores;

    console.log(cUno);

    console.log(cDos);
 
    const [, , cTres] = colores;

    console.log(cTres);
 
    const [c01, c02] = ['amarillo', 'azul', 'rojo', 'verde', 'naranja'];

    console.log(c01);
 
    desestructuracionArreglo(colores);

    const valor1 = desestructuracionArreglo2();

    console.log(valor1);
 
    const [, p2, p3, , , , , , , p10] = desestructuracionArreglo2();

    console.log(p2);

    console.log(p3);

    console.log(p10);
 
    //Desestructuracion de objetos: Son los nombres de atributos 

    const auto = {

        marca: 'Toyota',

        modelo: 'RAV4',

        anio: 2022,

        color: 'Negro'

    }
 
    const { marca, color, anio } = auto;

    console.log('Desestructuracion de objetos: ' + color);
 
    // CORRECCION: El código que estaba con errores

    const { marca: marca1, anio: anio1 } = {

        marca: 'Ford',

        modelo: 'Escape',

        anio: 2024,

        color: 'Negro'

    };
 
    console.log(anio1);
 
    desestructuracionObjeto(auto);
 
    const valor2 = desestructuracionObjeto2();

    console.log(valor2);

    const universidad = {
        nombre: 'Uce',
        direccion: 'America',
        rector:{
            nombreR:'Daniel',
            apellidoR:'teran',
        }
    }

    const{rectorR, nombreR} = universidad;
    console.log(rector);
    const{apellidoR} = rector;
    console.log(apellidoR);


    const universidad2 = {
        nombre2: 'Uce',
        direccion2: 'America',
        rector2:{
            nombreR2:'Daniel',
            apellidoR2:'teran',
        }
    }

    const {nombre2, rector2:{nombreR2}} = universidad2;
    console.log(nombreR2);
    

}
 
function desestructuracionArreglo([c1, c2, c3]) {

    console.log(c1);

    console.log(c2);

    console.log(c3);

}
 
function desestructuracionArreglo2() {

    const diasLaborales = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    return diasLaborales;

}
 
function desestructuracionObjeto(objeto) {

    console.log(objeto);

}
 
function desestructuracionObjeto2(marca, color) {

    console.log(marca);

    console.log(color);

}

 

