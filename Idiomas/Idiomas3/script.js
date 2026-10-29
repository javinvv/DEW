let codigos = ["es", "en", "it", "fr"];
let nombresBotones = ["Español", "English", "Italiano", "Français"];

let contenedorBotones = document.getElementById("boton");

for (let i = 0; i < codigos.length; i++) {
    let boton = document.createElement("button");
    let codigoActual = codigos[i];
    
    boton.textContent = nombresBotones[i];
    
    boton.onclick = function() {
        cambiarIdioma(codigoActual);
    };
    
    contenedorBotones.appendChild(boton);
}

function cambiarIdioma(codigo) {
    let tituloH1 = document.getElementById("titulo");
    let parrafo = document.getElementById("mensaje");

    if (codigo === "es") {
        tituloH1.textContent = "¡Hola, bienvenido!";
        parrafo.textContent = "Haz clic en un botón para cambiar el idioma de esta página.";
    } 
    else if (codigo === "en") {
        tituloH1.textContent = "Hello, welcome!";
        parrafo.textContent = "Click on a button to change the language of this page.";
    } 
    else if (codigo === "it") {
        tituloH1.textContent = "Ciao, benvenuto!";
        parrafo.textContent = "Clicca su un pulsante per cambiare la lingua di questa pagina.";
    } 
    else if (codigo === "fr") {
        tituloH1.textContent = "Bonjour, bienvenue !";
        parrafo.textContent = "Cliquez sur un bouton pour changer la langue de cette page.";
    }
}