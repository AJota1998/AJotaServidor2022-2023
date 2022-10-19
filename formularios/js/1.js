
  const $FORM = document.getElementById("ej1"); //El motivo de utilizar const es porque es un objeto, también podemos usar let sin problema
  const $DNI = document.getElementById("IMPdni");
  const $NOMBRE = document.getElementById("IMPnombre");
  const $APELLIDOS = document.getElementById("IMPapellidos");
  const $TELEFONO = document.getElementById("IMPtelefono");
  const $COMENTARIO = document.getElementById("comentario");
  const $HORA = document.getElementById("IMPhora");
  const $COOKIE = document.getElementById("IMPcookie");

function mostrar() {

let cont = getCookie("Errores");

    (cont != "") ? setCookie("Errores", ++cont, 1) : setCookie("Errores", 1, 1);

    $COOKIE.value = getCookie("Errores");

  }

function reiniciar() {

setCookie("Errores", 0, 1); 

$COOKIE.value = 0;

  }

function handleSubmit(e) {

    e.preventDefault();

    const dni = $DNI.value; //utilizamos .value para referirnos al valor del objeto en sí, no a su referencia en memoria
    const nombre = $NOMBRE.value;
    const apellidos = $APELLIDOS.value;
    const telefono = $TELEFONO.value;
    const comentario = $COMENTARIO.value;
    const hora = $HORA.value;

    (dni == false || isValidDNI(dni) == false) ? alert("DNI Formato (99.999.999-X)") : 
    (nombre == false || isValidNombre(nombre) == false) ? alert("Mínimo 1 nombre, máximo 2") : 
    (apellidos == false || isValidApellidos(apellidos) == false) ? alert("Mínimo 1 apellido, máximo 2") : 
    (telefono == false || isValidTelefono(telefono) == false) ? alert("Teléfono formato (+34 954756898)") : 
    (comentario == false || isvalidComentario(comentario) == false) ? alert("Texto obligatorio de máximo 250 carácteres") :  
    (hora == false || isvalidHora(hora) == false) ? alert("Hora formato hh:mm") :
    alert("Formulario Correcto") 
        

    let regUsuario = {dni:dni, nombre:nombre, apellidos:apellidos, telefono:telefono, comentario:comentario, hora:hora}
    console.log(regUsuario)
    let newUser = JSON.stringify(regUsuario)
    console.log(newUser)

}

  function isValidDNI(dNI) {
    const validacion = /^\d{8}[a-zA-Z]$/
    return validacion.test(dNI)
    }

    function isValidNombre(name) {
    const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/
    return validacion.test(name)
    }

    function isValidApellidos(apell) {
    const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/
    return validacion.test(apell)
    }

    function isValidTelefono(telefono) {
        const validacion = /^\(\+\d{2,3}\)\d{9}$/
        return validacion.test(telefono)
    }

    function isvalidComentario(coment) {
    const validacion = /^[\s\S]{1,250}$/
    return validacion.test(coment)
    }

    function isvalidHora(hour) {
        const validacion = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/
        return validacion.test(hour)
    }
    
    $FORM.addEventListener('submit', handleSubmit)
