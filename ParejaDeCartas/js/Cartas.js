function mostrarCartas(cartas) {
    const contenedor = document.getElementById("tablero");
    contenedor.innerHTML = "";
    
    for (let i = 0; i < cartas.length; i++) {
    let carta = cartas[i];
    let etiqueta = document.createElement("span");
    etiqueta.textContent = carta.numero + " ";//Añadimos el numero de la carta al span.
    contenedor.appendChild(etiqueta);//Metemos el span dentro del tablero.
}
}
function generarCartas(numParejas) {
    let cartas = [];
    for (let i = 1; i <= numParejas; i++) {
        cartas.push({ numero: i, descubierta: true });//Guarda el numero de la carta y si esta descubierta o no.
        cartas.push({ numero: i, descubierta: true });//Ademas tanto numero como descubierta son propiedades distintas.
    }
    return cartas;
}
function fisher_yates(listaNum) {
    let i = listaNum.length - 1;

    while (i > 0) {//Mientras que i sea mayor que 0, se ejecuta el bucle.
        let pos = Math.floor(Math.random() * (i + 1));//Se genera un número aleatorio entre 0 y el valor maximo del array.
        let cambio = listaNum[i];//Se guarda el valor del array en la posición i en una variable temporal.
        listaNum[i] = listaNum[pos];//Se cambia el valor del array en la posición i por el valor del array en la posición aleatoria.
        listaNum[pos] = cambio;//Se cambia el valor del array en la posición aleatoria por el valor guardado en la variable temporal.
        i--;
    }
    return listaNum;
}
let ParejaCartas = prompt("Introduce el número de parejas (del 4 al 12):");
if (ParejaCartas !== null) {
    let numeroP = Number(ParejaCartas);
    if (!Number.isNaN(numeroP) && numeroP >= 4 && numeroP <= 12) {
        let mazo = generarCartas(numeroP);
        let barajado = fisher_yates(mazo);
        mostrarCartas(barajado);
    }else{
        alert("El número escogido está fuera de rango (debe ser entre 4 y 12) o no es válido.");
    }
}