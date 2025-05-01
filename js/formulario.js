function guardar() {
    validar(); 
    
}

function validar() {
    let nombre = document.getElementById("id_nombre").value;
    if(nombre == ""){
        console.log("El campo nombre no puede estar vacío");
    }else{
        console.log("El campo nombre es válido");
    }
}