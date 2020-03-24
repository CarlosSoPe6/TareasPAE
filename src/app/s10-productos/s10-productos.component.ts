import { Component, OnInit } from '@angular/core';
import {Producto} from './Producto';

@Component({
  selector: 'app-s10-productos',
  templateUrl: './s10-productos.component.html',
  styleUrls: ['./s10-productos.component.css']
})
export class S10ProductosComponent implements OnInit {

  productos: Producto[];
  busquedaProductos: Producto[];
  busqueda: string;
  existencia: boolean;
  ordenar: boolean;
  resaltar: boolean;

  constructor() {
    console.log("constructor");
    this.busquedaProductos = [];
    this.productos = [
      new Producto(1, "Impresora", "Epson", "Impresora de tanque de tinta", 1000, 5),
      new Producto(2, "Computadora", "DELL", "DELL XPS Ubuntu developer", 15000, 2),
      new Producto(3, "Televisión", "LG", "Televisión de 24 pulgadas", 999, 3),
      new Producto(4, "Cartucho de tinta", "HP", "Cartucho de tinta muy caro", 1234, 10),
      new Producto(5, "Cámara", "Chilango", "valedor", 50, 0),
    ];

    for(let i = 0; i < this.productos.length; i++){
      this.busquedaProductos.push(this.productos[i]);
    }    

    this.busqueda = "";
    this.existencia = false;
    this.ordenar = false;
    this.resaltar = false;
  }

  onExistencia() {
    this.existencia = !this.existencia;
    this.onBusqueda();
  }

  onOrdenar() {
    this.ordenar = !this.ordenar;
    this.onBusqueda();
  }

  onResaltar() {
    this.resaltar = !this.resaltar;
  }

  onBusqueda() {
    console.log("Busqyeda...", this.existencia, this.ordenar);
    let busquedaUpper = this.busqueda.toUpperCase();
    this.busquedaProductos = this.productos.filter((prod: Producto) => {
      if(prod.nombre.toUpperCase().includes(busquedaUpper) || prod.descripcion.toUpperCase().includes(busquedaUpper)){
        return prod;
      }
    });
    
    if(this.existencia){
      this.busquedaProductos = this.productos.filter((prod: Producto) => {
        if(prod.existencia > 0){
          return prod;
        }
      });
    }

    if(this.ordenar){
      this.busquedaProductos = this.busquedaProductos.sort((p1, p2) => p2.precio - p1.precio);
    }
    console.log(this.busquedaProductos.length);
  }

  ngOnInit() {
  }


}