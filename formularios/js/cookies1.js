//comprobacion que el navegador tiene activas las cookies

if (navigator.cookieEnabled == true) {
    alert("Las cookies están activas");
  } else {
    alert("Las cookies están desactivadas");
  }


//creación de la cookie 

function setCookie(n, v, exp) {

let d = new Date();

d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
let expira = "expires=" + d.toUTCString();
document.cookie = n + "=" + v + ";" + expira;

}
  

//Leer el value de la cookie

function getCookie(n) {

let name = n + "=";
let separador = document.cookie.split(";");

    for (let i = 0; i < separador.length; i++) {
        let c = separador[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(n) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";

  }

//Comprobar si la cookie está inicializada

function checkCookie(n) {

let v = getCookie(n); //Extrae el value de la función anterior
    
    if (v != "") {
        alert("valor: " + v);
    } else {
        updateCookie();
    }

}

//Actualizar la cookie

function updateCookie() {

let n = prompt("Introduzca el n de la cookie");
let v = prompt("Introduzca el v de la cookie");
let exp = parseInt(prompt("Introduzca el numero de dias hasta su expiración"));
    
setCookie(n, v, exp)

}

//Ver las cookies actuales 

function cookies() {

    alert("Estas son las cookies actuales: \n" + document.cookie)
    
}

//Eliminar la cookie

function deleteCookie() {

let n = prompt("Introduzca el nombre de la cookie a eliminar");
setCookie(n, "", -1);


}





    
