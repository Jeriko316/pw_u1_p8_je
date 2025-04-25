const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1=parseFloat(document.getElementById('id_numero_1').value);
    let num2= parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;

    if(tipo === SUMA){
        resultado = sumar(num1, num2);
    }

    if(tipo === RESTA){
        resultado = restar(num1, num2);
    }

    if(tipo === MULTIPLICACION){
        resultado = multiplicar(num1, num2);
    }

    if(tipo === DIVISION){
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
     let arreglo = [1,2,3,4,5];

     const nombrec='10';

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


    const numerosImpares = [1,3,5,7,9];
    const numerosPares = [2,4,6,8,10]; 

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros); 

    /*Sentencias de control*/
    for(const dia of diasLaborables){
        console.log(dia);
        if(dia === 'viernes'){
            console.log('por fin viernes');
        }else{
            console.log('aun no es viernes mmv');
        }

        if(dia !== 'viernes'){
            console.log('dia normal de camello');
        }else{
            console.log('Dia de salida y farra');
        }
    }


    /*Manejo de Objetos*/ 
    const miProfesor = {
        nombre: 'erick' , 
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

    if(miProfesor.ciudad === 'guayaquil'){
        console.log('ES MONO');
    }

    const estudiante1 = {
        nombre: 'carlos' , 
        apellido: 'saenz',
        edad: 20,
        genero: 'masculino',
        ciudad: 'cuenca'
    }

    const estudiante2 = {
        nombre: 'ana' , 
        apellido: 'luisa',
        edad: 20,
        genero: 'femenino',
        ciudad: 'guayaquil'
    }

    const estudiante3 = {
        nombre: 'aquiles' , 
        apellido: 'castro',
        edad: 20,
        genero: 'masculino',
        ciudad: 'quito'
    }
    const arregloEst = [estudiante1, estudiante2, estudiante3]
    console.log(arregloEst); 
    console.table(arregloEst);






