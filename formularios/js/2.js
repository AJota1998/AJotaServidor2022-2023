function validar() {
    const $FORM = document.getElementById("ej2");
    const $NOMBRE = document.getElementById("ImputNombre");
    const $APELLIDOS = document.getElementById("ImputApellidos");
    const $EMAIL = document.getElementById("ImputEmail");
    const $WEB = document.getElementById("ImputWeb");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const nombre = $NOMBRE.value;
      const apellidos = $APELLIDOS.value;
      const email = $EMAIL.value;
      const web = $WEB.value;
  
      (nombre == false || isValidNombre(nombre) == false) ? alert("Mínimo 1 nombre, máximo 2") : 
      (apellidos == false || isValidApellidos(apellidos) == false) ? alert("Mínimo 1 apellido, máximo 2") : 
      (email == false || isValidEmail(email) == false) ? alert("Email formato: (xxxxxx@yyyy.zzz") : 
      (web == false || isValidWeb(web) == false) ? alert("Web formato: (http://www.xxx.yyy") : 
      alert("Formulario Correcto") 
          
  
      let regUsuario = {nombre:nombre, apellidos:apellidos, email:email, web:web}
      console.log(regUsuario)
      let newUser = JSON.stringify(regUsuario)
      console.log(newUser)
    }

      function isValidNombre(nombre) {
      const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/
      return validacion.test(nombre)
      }
  
      function isValidApellidos(apell) {
      const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/
      return validacion.test(apell)
      }
  
      function isValidEmail(email) {
          const validacion = /^(.+\@.+\..+)$/ 
          return validacion.test(email)
      }
  
      function isValidWeb(web) {
      const validacion = /^(ftp|http|https):\/\/[^ "]+$/
      return validacion.test(web)
      }

      $FORM.addEventListener('submit', handleSubmit)
  }
  