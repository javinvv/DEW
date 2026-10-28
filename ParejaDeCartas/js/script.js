function mostrarCartas(cartas) {
    const contenedor = document.getElementById("tablero");
    if (!contenedor) {
        console.error("No se encontró el contenedor del tablero en el HTML.");
        return;
    }
    contenedor.innerHTML = "";
    
    cartas.forEach(carta => {
        const span = document.createElement("span");
        span.textContent = carta.numero + " ";
        contenedor.appendChild(span);
    });
}