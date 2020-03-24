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
    this.busquedaProductos = [];
    this.productos = [

    ];
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
  }

  ngOnInit() {
  }


}