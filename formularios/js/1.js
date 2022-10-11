function validar() {

    const $FORM = document.getElementById("ej1") //El motivo de utilizar const es porque es un objeto, también podemos usar let sin problema
    const $DNI = document.getElementById("IMPdni")
    const $NOMBRE = document.getElementById("IMPnombre")
    const $APELLIDOS = document.getElementById("IMPapellidos")
    const $TELEFONO = document.getElementById("IMPtelefono")
    const $COMENTARIO = document.getElementById("comentario")
    const $HORA = document.getElementById("IMPhora")


    function handleSubmit(e) {
        e.preventDefault() 
            const formulario = $FORM.value //utilizamos .value para referirnos al valor del objeto en sí, no a su referencia en memoria
            const dni = $DNI.value
            const nombre = $NOMBRE.value
            const apellidos = $APELLIDOS.value
            const telefono = $TELEFONO.value 
            const comentario = $COMENTARIO.value
            const hora = $HORA.value
            
            
    }
}