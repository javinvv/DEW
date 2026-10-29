// 1. Creamos un objeto con las traducciones para cada idioma
let traducciones = {
    es: {
        titulo: "¡Hola, bienvenido!",
        mensaje: "Haz clic en un botón para cambiar el idioma de esta página."
    },
    en: {
        titulo: "Hello, welcome!",
        mensaje: "Click on a button to change the language of this page."
    },
    it: {
        titulo: "Ciao, benvenuto!",
        mensaje: "Clicca su un pulsante per cambiare la lingua di questa pagina."
    }
};
function cambiarIdioma(codigoIdioma) {
    let frases = traducciones[codigoIdioma];
    let elementoTitulo = document.getElementById("titulo");
    let elementoMensaje = document.getElementById("mensaje");

    elementoTitulo.textContent = frases.titulo;
    elementoMensaje.textContent = frases.mensaje;
}