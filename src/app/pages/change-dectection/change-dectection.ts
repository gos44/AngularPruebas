import { JsonPipe } from '@angular/common';
import { Component, signal,Pipe, ChangeDetectionStrategy, computed } from '@angular/core';
import { Title } from "@shared/title/title";
import { release } from 'os';

@Component({
  selector: 'app-change-dectection',
  imports: [Title,JsonPipe],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // templateUrl: './change-dectection.html',
  template:'<app-title [title]="currectFramework()" ></app-title><pre>{{Frawork() | json}}</pre><pre>{{Frawork2 | json}}</pre>',
  styleUrl: './change-dectection.css',
})

export default class ChangeDectection {

public currectFramework = computed(
  ()=>`Chages dection - ${this.Frawork().name}`
);

public Frawork = signal({
  name:'Angular',
  releaseDate:'2018',
})

public Frawork2 = ({
  name:'Angular',
  releaseDate:'2018'
})

constructor(){

  setTimeout(()=>{

  // this.Frawork2.name ='Algo';
  // console.log('Hecho')
  // console.log( this.Frawork2.name)
  this.Frawork.update(value=>({
    ...value,
    name:'React'
  }))

  console.log( this.Frawork.name)
  },2000);
}

}