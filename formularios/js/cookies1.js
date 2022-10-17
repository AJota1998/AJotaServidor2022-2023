
//creación de la cookie 

function setCookie() {
    let cname = prompt("Introduzca el nombre de la cookie");
    let cvalue = prompt("Introduzca el valor de la cookie");
    
    document.cookie = cname + "=" + cvalue + ";";
}

//Leer el valor de la cookie

function getCookie(cname) {

let name = cname + "=";
let ca = document.cookie.split(";"); //Divide la cookie separando por ;
    
    for (let i = 0; i < ca.length; i++) { //Recorre cada trozo de la cookie
    let c = ca[i];
        while (c.charAt(0) == "") {
        c = c.substring(1);
        }

    if (c.indexOf(name) == 0 ) //Si encuentra el campo buscado
    return c.substring(name.length, c.length) //lo devuelve
    }

    return ""; //Si no devuelve vacío
}

//Comprobar si la cookie está inicializada

function checkCookie() {
    let username = getCookie("username"); //Extrae el valor de la función anterior
    
    if (username != "") {
        alert("Bienvenido de nuevo" + username) //Lo saludamos
    } else if (username != "" && username != null) {
        setCookie() //Se inicializa la cookie
    } 
}

//Actualizar la cookie

function updateCookie() {
    setCookie();
}

//Eliminar la cookie

function deleteCookie(cname) {
    setCookie(cname, "", -1)
} 



    
