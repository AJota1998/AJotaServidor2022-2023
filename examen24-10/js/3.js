function juego() {

    let numAleatorio = Math.floor(Math.random() * (51 - 1) + 1);
    let numUsuario;
    let contador = 0;

    while (numAleatorio != numUsuario && contador < 6) {
        
        numUsuario = prompt("Introduzca un número del 1 al 50")
        
        while(numUsuario === NaN) {
            numUsuario = prompt("Introduzca un número del 1 al 50");
        }

        if (numUsuario > numAleatorio) {
            alert("El númeo es menor")
        } else if (numUsuario < numAleatorio) {
            alert("El número es mayor")
        } else {
            alert("HAS GANADO, ERES UN CRACK")
        }
        contador++;
    }
    if (contador > 5) {
        alert("HAS PERDIDO, OTRA VEZ SERÁ");
    }
}