function validar() {
    const $FORM = document.getElementById("ej3"); 
    const $DNI = document.getElementById("IMPdni");
    const $NOMBRE = document.getElementById("IMPnombre");
    const $FECHA = document.getElementById("IMPfecha");
    const $EMAIL = document.getElementById("IMPemail");
    const $WEB = document.getElementById("IMPweb");
    const $PASSWORD = document.getElementById("IMPpassword");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const dni = $DNI.value;
      const nombre = $NOMBRE.value;
      const fecha = $FECHA.value;
      const email = $EMAIL.value;
      const web = $WEB.value;
      const password = $PASSWORD.value;
  
      (dni == false || isValidDNI(dni) == false) ? alert("DNI Formato (99.999.999-X)") : 
      (nombre == false || isValidNombre(nombre) == false) ? alert("Mínimo 1 nombre y 1 apellido, máximo 2 nombres y 2 apellidos") : 
      (fecha == false || isValidFecha(fecha) == false) ? alert("Fecha formato: (dd/mm/yyyy)") : 
      (email == false || isValidEmail(email) == false) ? alert("Email formato: (xxxx@yyyy.zzz)") : 
      (web == false || isvalidWeb(web) == false) ? alert("Web formato: (http://www.xxxx.yyy)") :  
      (password == false || isvalidPassword(password) == false) ? alert("Mínimo 8 carácteres, máximo 10, 1 dígito, 1 minúscula, 1 mayúscula") :
      alert("Formulario Correcto") 
          
  
      let regUsuario = {dni:dni, nombre:nombre, fecha:fecha, email:email, web:web, password:password}
      console.log(regUsuario)
      let newUser = JSON.stringify(regUsuario)
      console.log(newUser)
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
  
      function isValidEmail(email) {
          const validacion = /^(.+\@.+\..+)$/
          return validacion.test(email)
      }
  
      function isvalidWeb(web) {
        const validacion = /^(ftp|http|https):\/\/[^ "]+$/
        return validacion.test(web)
      }
  
      function isvalidPassword(password) {
          const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/
          return validacion.test(password)
      }
      
      $FORM.addEventListener('submit', handleSubmit)
  }