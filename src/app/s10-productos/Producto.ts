export class Producto {
  uid: number;
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  existencia: number;
  imagen: string;
  constructor(uid, nombre, marca, descripcion, precio, existencia) {
    this.uid = uid;
    this.nombre = nombre;
    this.marca = marca;
    this.descripcion = descripcion;
    this.precio = precio;
    this.existencia = existencia;
    this.imagen = `https://picsum.photos/${uid}/1/100/100`;
  }
}
