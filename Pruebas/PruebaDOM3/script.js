let divs = document.getElementsByTagName("div")
for (let i= 0; i < divs.length; i++){
    let elem = divs[i];
    console.log(elem.className);
    if(elem.className === "importante"){
        let texto = ""
        texto = texto + elem.textContent + " ";
        console.log("ok")
    }
}
let output = document.getElementById("salida");
output.textContent = salida

let q = document