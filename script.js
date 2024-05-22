const submitFunction = (evento) => {
 evento.preventDefault()
 if(!validarFormulario()){
    evento.preventDefault();
 }else{
    evento.preventDefault();

    alert8(
        "lso datos enviados fueron: \n" +
        "nombre:"+ document.getElementById("nombre").value + "\n"+ 
        "Apellido:"+ document.getElementById("Apellido").value + "\n"+ 
        "Documento:"+ document.getElementById("Documento").value + "\n"+ 
        "Email:"+ document.getElementById("Email").value + "\n"+ 
        "Edad:"+ document.getElementById("Edad").value + "\n"+
        "Actividad:"+ document.getElementById("Actividad").value + "\n"+ 
        "Nivel de estudio:"+ document.getElementById("Nivel de estudio").value + "\n" 
    )

 }

}
document.getElementById("formulario").addEventListener("submit", submitFunction)


// coleccion de inputs que son nombre apellido y docuento
function validarFormulario(){
    // esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;


    // error con la primera en mayuscula 
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ""){
            mostrarError(errorCampo, "Este campo es requerido!")
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este campo debe tener al menos 3 caracteristicas!")
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })

    // esto valida el camo email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail")
    
    //este regex valida que el formato del email sea valido
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, "Ingrese un codigo valido")
    }


    // validaciond de edad 
    const edad = document.getElementById("edad");
    const errorEdad = document.getElementById("errorEdad")

    if(edad.value < 18){
    mostrarError(errorEdad, "Debe ser mayor de 18 años para registarte!")
    validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }

    // validacion de la actividad
    const actividad = document.getElementById("actividad")
    const errorActividad = document.getElementById("errorActividad")

    if(actividad.value == ""){
        mostrarError(errorActividad, "Por favor selecciona una actividad")
        validacionCorrecta= false;
    }else{
        ocultarError(errorActividad)
    }

    // validaccion de nivel de estudio
    const nivelEstudio =document.getElementById("nivelEstudios")
    const errorNivelEstudio =document.getElementById("errorNivelEstudio")

    if(nivelEstudio.value == ""){
        mostrarError(errorNivelEstudio, "Por favor selecciona un nivel de estudio")
        validacionCorrecta= false;
    }else{
        ocultarError(errorNivelEstudio)
    }

    // validar los terminos y condiciones 
    const aceptoTerminos = document.getElementById("aceptoTerminos")
    const errorAceptoTerminios = document.getElementById("errorAceptoTerminios")

    if (!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminios, "Debes aceptar los terminos y condiciones")
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminios)
    }
    return validacionCorrecta //esto dira si el formulario completo es valido
}



// mostrar los errores
const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
// ocultar los errores
const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";
}
