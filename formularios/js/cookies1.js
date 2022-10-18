//comprobacion que el navegador tiene activas las cookies

if (navigator.cookieEnabled == true) {
    alert("Las cookies están activas");
  } else {
    alert("Las cookies están desactivadas");
  }


//creación de la cookie 

function setCookie() {

let n = prompt("Introduzca nombre de cookie")
let v = prompt("Introduzca valor de la cookie")
let exd = parseInt(prompt("Introduzca el número de dias hasta que esta expire"))
let d = new Date();

d.setTime(d.getTime() + exd * 24 * 60 * 60 * 1000);
let exp = "expires=" + d.toUTCString(); 
document.cookie = n + "=" + v + ";" + exp;

}
  

//Leer el value de la cookie

function getCookie() {

let n = prompt("Introduzca el nombre de la cookie a leer")
let v = n + "=";
let ca = document.cookie.split(";"); //Divide la cookie separando por ;
    
    for (let i = 0; i < ca.length; i++) { //Recorre cada trozo de la cookie
    let c = ca[i];
        while (c.charAt(0) == " ") {
        c = c.substring(1);
        }

    if (c.indexOf(v) == 0 ) //Si encuentra el campo buscado
    return c.substring(v.length, c.length) //lo devuelve
    }

    return ""; //Si no devuelve vacío

}

//Comprobar si la cookie está inicializada

function checkCookie() {

let v = getCookie(); //Extrae el value de la función anterior
    
    if (v != "") {
        alert("Valor: " + v);
    } else {
        setCookie();
    }

}

//Actualizar la cookie, simplemente se llama desde dentro a la funcion de creacion

function updateCookie() {
    
setCookie()

}

//Eliminar la cookie

function deleteCookie() {

let n = prompt("Introduzca el nombre de la cookie a borrar")
let v = prompt("Introduzca el valor de la cookie a borrar")
let d = new Date();

d.setTime(d.getTime() - 1 * 24 * 60 * 60 * 1000);
let exp = "expires=" + d.toUTCString(); 

document.cookie = n + "=" + v + ";" + exp;


}

//Ver las cookies actuales 

function cookies() {

alert("Estas son las cookies actuales: \n" + document.cookie)

}



    
