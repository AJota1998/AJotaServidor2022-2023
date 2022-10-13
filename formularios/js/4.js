    const $FORM = document.getElementById("ej4"); 
    const $FECHACREACION = document.getElementById("impFechaCreacion");
    const $COCINERO = document.getElementById("impCocinero");
    const $DESTINATARIO = document.getElementById("impDestinatario");
    const $GRAMOS = document.getElementById("impGramos");
    const $COMPOSICION = document.getElementById("impComposicion");
    const $NCUENTA = document.getElementById("impNCuenta");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const fcreacion = $FECHACREACION.value;
      const cocinero = $COCINERO.value;
      const desinatario = $DESTINATARIO.value;
      const gramos = $GRAMOS.value;
      const composicion = $COMPOSICION.value;
      const ncuenta = $NCUENTA.value;
  
      (fcreacion == false || isValidFCreacion(fcreacion) == false) ? alert("Formato: dd/mm/aaaa") : 
      (cocinero == false || isValidCocinero(cocinero) == false) ? alert("Formato: WW$1234") : 
      (desinatario == false || isValidDestinatario(desinatario) == false) ? alert("Formato: NM_alburquerque:1234") : 
      (gramos == false || isValidGramos(gramos) == false) ? alert("Número de gramos entre 100 y 5000") : 
      (composicion == false || isvalidComposicion(composicion) == false) ? alert("Formato: 200gC3OH7") :  
      (ncuenta == false || isvalidNCuenta(ncuenta) == false) ? alert("Cuenta: Dos letras\n dos dígitos\n un guión\n doce dígitos de cuenta\n un guión\n dos dígitos de control") :
      alert("Formulario Correcto") 
          
  
      let regUsuario = {fcreacion:fcreacion, cocinero:cocinero, desinatario:desinatario, gramos:gramos, composicion:composicion, ncuenta:ncuenta}
      console.log(regUsuario)
      let newUser = JSON.stringify(regUsuario)
      console.log(newUser)
    }
  
    function isValidFCreacion(fcreacion) {
      const validacion = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/
      return validacion.test(fcreacion)
      }
  
      function isValidCocinero(cocinero) {
      const validacion = /^[A-Z]{2}[[:punct:]]\d{4}$/
      return validacion.test(cocinero)
      }
  
      function isValidDestinatario(destinatario) {
      const validacion = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/
      return validacion.test(destinatario)
      }
  
      function isValidGramos(gramos) {
          const validacion = /^(.+\@.+\..+)$/
          return validacion.test(gramos)
      }
  
      function isvalidComposicion(composicion) {
        const validacion = /^(ftp|http|https):\/\/[^ "]+$/
        return validacion.test(composicion)
      }
  
      function isvalidNCuenta(ncuenta) {
          const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/
          return validacion.test(ncuenta)
      }
      
      $FORM.addEventListener('submit', handleSubmit)
  