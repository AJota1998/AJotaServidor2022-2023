const $FORM = document.getElementById("formulario1"); 
    const $DNI = document.getElementById("impdni");
    const $NOMBRE = document.getElementById("impnombre");
    const $FECHA = document.getElementById("impfecha");
    const $HORA = document.getElementById("imphora");
    const $MOVIL = document.getElementById("impmovil");
    const $EMAIL = document.getElementById("impemail");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const dni = $DNI.value;
      const nombre = $NOMBRE.value;
      const fecha = $FECHA.value;
      const hora = $HORA.value;
      const movil = $MOVIL.value;
      const email = $EMAIL.value;
      
  
      (dni == false || isValidDNI(dni) == false) ? alert("DNI Formato (99999999X)") : 
      (nombre == false || isValidNombre(nombre) == false) ? alert("Mínimo 1 nombre y 1 apellido, máximo 2 nombres y 2 apellidos") : 
      (fecha == false || isValidFecha(fecha) == false) ? alert("Fecha formato: (dd/mm/yyyy)") : 
      (hora == false || isvalidHora(hora) == false) ? alert("Hora formato (hh:mm)") :  
      (email == !false || movil == !false) ? alert("Rellene el campo Email o el campo movil") :
      (isValidEmail(email) == false && isValidTelefono(movil) == false) ? alert("Introduzca su elección en el formato correcto") :
      alert("Formulario Correcto");
          
  
      let regUsuario = {dni:dni, nombre:nombre, fecha:fecha, hora:hora, email:email, movil:movil}
      console.log(regUsuario)
      let newUser = JSON.stringify(regUsuario)
      console.log(newUser)

      localStorage.setItem("DNI", regUsuario.dni);
      localStorage.setItem("Nombre", regUsuario.nombre);
      localStorage.setItem("Fecha", regUsuario.fecha);
      localStorage.setItem("Hora", regUsuario.hora);
      localStorage.setItem("Email", regUsuario.email);
      localStorage.setItem("Movil", regUsuario.movil);
    }

    function recargar() {

      $DNI.value = localStorage.getItem("DNI");
      $NOMBRE.value = localStorage.getItem("Nombre");
      $FECHA.value = localStorage.getItem("Fecha");
      $EMAIL.value = localStorage.getItem("Email");
      $MOVIL.value = localStorage.getItem("Movil");
      $HORA.value = localStorage.getItem("Hora");

    }
  
    function isValidDNI(dNI) {
      const validacion = /^\d{8}[a-zA-Z]$/
      return validacion.test(dNI)
      }
  
      function isValidNombre(name) {
      const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s([a-zA-ZáéíóúñÑÁÉÍÓÚ]+))|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s([a-zA-ZáéíóúñÑÁÉÍÓÚ]+))))$/
      return validacion.test(name)
      }
  
      function isValidFecha(fecha) {
      const validacion = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/
      return validacion.test(fecha)
      }

      function isvalidHora(hour) {
        const validacion = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/
        return validacion.test(hour)
    }
  
    function isValidEmail(email) {
        const validacion = /^(.+\@.+\..+)$/
        return validacion.test(email)
    }
  
    function isValidTelefono(telefono) {
    const validacion = /^\(\+\d{2,3}\)\d{9}$/
    return validacion.test(telefono)
    }
  
    $FORM.addEventListener('submit', handleSubmit);
  