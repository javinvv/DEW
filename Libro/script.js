class Libro {
  constructor(titulo, precio, stock = 0) {
    this._titulo = titulo;
    this._precio = precio;
    this._stock = stock;
  }

  precioConIgic() {
    return Math.round(this._precio * 1.07 * 100) / 100;
  }

  hayStock() {
    return this.stock > 0;
  }
  mostrar(){
    return "Titulo: " + this._titulo + "  |  Precio: " + this._precio + "  |  Stock: " + this._stock;
  }
  get Titulo(){
    return this.titulo;
  }
  get Precio(){
    return this.precio;
  }
  get Stock(){
    return this.stock;
  }
  set Titulo(titulo){
    this._titulo = titulo;
  }
  set Precio(precio){
    if(precio < 0){
        console.log("No se puede valores negativos")
    }
    this._precio = precio;
  }
  set Stock(stock){
    if(!Number.isInteger(stock) || stock < 0){
        console.log("No se puede valores negativos")
    }
    this._stock = stock;
  }
}

const l1 = new Libro('Mararía', 12.5, 4);
const l2 = new Libro('Poemas de la isla', 9);
l1.precio = -10