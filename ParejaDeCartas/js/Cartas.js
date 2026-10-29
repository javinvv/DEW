function mostrarCartas(cartas) {
    const contenedor = document.getElementById("tablero");
    contenedor.innerHTML = "";
    
    cartas.forEach(carta => {
        const span = document.createElement("span");
        span.textContent = carta.numero + " ";
        contenedor.appendChild(span);
    });
}
function generarCartas(numParejas) {
    let cartas = [];
    for (let i = 1; i <= numParejas; i++) {
        cartas.push({ numero: i, descubierta: true });
        cartas.push({ numero: i, descubierta: true });
    }
    return cartas;
}
function iniciarJuego(){
    const cartas = prompt("Introduce el numero de parejas, del 4 al 12");
    if (cartas === null) return;
    let nuevo = Number(cartas);
    if (cartas >= 4 || cartas <= 12) {
        console.log("Número de parejas válido:", nuevo);
    }else{
        return alert("El numero escogido esta fuera de rango")
    }
}