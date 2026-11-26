const click = document.querySelector("button")
const div1 = document.querySelector("#hola");
//const div2 = document.getElementByTagName("div")[0];

click.onclick = function() {
    const div = document.createTextNode("Hola")
    console.log("texto aplicado")
    div1.appendChild(div)
}