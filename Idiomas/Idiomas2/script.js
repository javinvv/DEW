let traducciones = {
    es: {
        nombre: "Español",
        titulo: "¡Hola, bienvenido!",
        mensaje: "Haz clic en un botón para cambiar el idioma de esta página."
    },
    en: {
        nombre: "English",
        titulo: "Hello, welcome!",
        mensaje: "Click on a button to change the language of this page."
    },
    it: {
        nombre: "Italiano",
        titulo: "Ciao, benvenuto!",
        mensaje: "Clicca su un pulsante per cambiare la lingua di questa pagina."
    },
    fr: {
        nombre: "Français",
        titulo: "Bonjour, bienvenue !",
        mensaje: "Cliquez sur un bouton pour changer la langue de cette page."
    }
};
let contenedorBotones = document.getElementById("boton");
for (let codigo in traducciones) {
    let boton = document.createElement("button");
    boton.textContent = traducciones[codigo].nombre;
    boton.onclick = function() {
        cambiarIdioma(codigo);
    };
    contenedorBotones.appendChild(boton);
}
function cambiarIdioma(codigo) {
    let frases = traducciones[codigo];
    
    document.getElementById("titulo").textContent = frases.titulo;
    document.getElementById("mensaje").textContent = frases.mensaje;
}