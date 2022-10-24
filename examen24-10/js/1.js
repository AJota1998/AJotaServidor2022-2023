function comanda() {
    
    let plato = prompt("Introduzca un número de plato, 1, 2, 3, 4 o 5");
    let complementos = prompt("Introduzca sus extras ej: bebida entrante postre");
    let vip = prompt("Introduzca si es vip 's', si no 'n'");

    const valor = 6;
    const ivaG = 1.21;
    const ivaR = 1.10;
    const descuento = 0.95;
    let baseImponible = 0;
    let total
    
    

    let miarray = complementos.split(' ')
    let contadorBebidas = 0;

    for (i = 0; i <= miarray.length-1; i++) {
        if (miarray[i] == "bebida") {
            contadorBebidas++;
        }
    }

    
    if (plato > 0 && plato < 6) {
        baseImponible += (valor + parseInt(miarray.length));
        if (vip == "s") {
            baseImponible = (baseImponible * descuento);
        }
        if (contadorBebidas > 0) {
            baseImponible += (contadorBebidas * ivaG);
        }
        total = baseImponible + ((miarray.length - contadorBebidas) * ivaR);

        alert("Precio de la comanda: " + total);
    } else {
        alert("Algún dato introducido es erróneo")
    }

}