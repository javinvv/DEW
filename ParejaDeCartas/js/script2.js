function generarCartas(numParejas) {
    let cartas = [];
    for (let i = 1; i <= numParejas; i++) {
        cartas.push({ numero: i, descubierta: true });
        cartas.push({ numero: i, descubierta: true });
    }
    return cartas;
}