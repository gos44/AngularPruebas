import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pruebas',
  imports: [FormsModule],
  templateUrl: './pruebas.html',
  styleUrl: './pruebas.css',
})
export class Pruebas {
  names=['julia','juan','pablo','carlos','salomon']
  
  cosas: string[] =[];
  cosasNuevas:string="";
  agregarCosas(){
    if(this.cosasNuevas && this.cosasNuevas.trim())
      this.cosas.push(this.cosasNuevas.trim())
      this.cosasNuevas ="";
  }
  
  // agregarCosas2() {
  // const texto = this.cosasNuevas?.trim();

  // if (!texto) return;

  // this.cosas.push(texto);
  // this.cosasNuevas = "";
  // } 

}
