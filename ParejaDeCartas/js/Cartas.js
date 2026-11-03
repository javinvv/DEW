function fin() {
    localStorage.removeItem(clave);
    console.log("Partida finalizada.");
}

function mostrarCartas(cartas) {
    const contenedor = document.getElementById("tablero");
    contenedor.innerHTML = "";

    for (let i = 0; i < cartas.length; i++) {
        let carta = cartas[i];
        let etiqueta = document.createElement("div");
        etiqueta.classList.add("cuadrado");//Añadimos la clase carta al div para posteriormente darle forma en el documento css.
        etiqueta.textContent = carta.numero;//Añadimos el numero de la carta a la etiqueta div.
        contenedor.appendChild(etiqueta);//Metemos la etiqueta div dentro del tablero.
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

function mostrarConsola(cartas, numParejas) {
    console.log("Número de parejas: " + numParejas);
    console.log("Numero total de cartas: " + cartas.length);
    let secuencia = [];
    for (let i = 0; i < cartas.length; i++) {
        secuencia.push(cartas[i].numero);//Sacamos el numero de cada carta y lo añadimos a un array para mostrarlo en la consola.
    }
    console.log("Secuencia de cartas: " + secuencia);
}

function iniciarJuego() {
    let datos = localStorage.getItem("partidaGuardada");
    let numeroP;
    if(datos){
        let guardado = JSON.parse(datos);
        numeroP = Number(guardado);
        console.log("Partida recuperada.");
    }else{
        let ParejaCartas = prompt("Introduce el número de parejas. Tiene que ser un numero del 4 al 12:");
        if (ParejaCartas !== null) {
            numeroP = Number(ParejaCartas);
            if (!Number.isNaN(numeroP) && numeroP >= 4 && numeroP <= 12) {
                localStorage.setItem("partidaGuardada", JSON.stringify(ParejaCartas));//JSON.stringify convierte un valor a JSON para poder guardarlo en el localStorage.
            }else{
                alert("El número escogido está fuera de rango (debe ser entre 4 y 12) o no es válido.");
                return;
            }
        }
        return;
    }
    let mazo = generarCartas(numeroP);
    let barajado = fisher_yates(mazo);
    mostrarCartas(barajado);
    mostrarConsola(barajado, numeroP);
}
iniciarJuego();