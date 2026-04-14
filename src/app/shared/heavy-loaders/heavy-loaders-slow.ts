import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [NgClass],
  template:`
  <section [ngClass]="['w-full h-40', cssClass]">
   heavy-loaderd
  </section>
  `,
  styleUrl: './heavy-loaders-slow.css',
})
export class HeavyLoadersSlow {

  @Input({required:true} ) cssClass!:string;

  constructor() {

     const start = Date.now();
    while (Date.now() - start < 1000) {
    }
  console.log('cargando');
  }
}
