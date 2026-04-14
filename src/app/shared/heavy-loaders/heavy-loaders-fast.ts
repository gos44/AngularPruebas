import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [ NgClass],
  template:`
  <section [ngClass]="['w-full', cssClass]">
    <ng-content/>
  </section>`,
  styleUrl: './heavy-loaders-slow.css',
})
export class HeavyLoadersFast {
  @Input({required:true}) cssClass!:string;
  constructor(){

    console.log('coasaca')
  }
}
