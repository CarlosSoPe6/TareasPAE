import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { S10ProductosComponent } from './s10-productos/s10-productos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, S10ProductosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
