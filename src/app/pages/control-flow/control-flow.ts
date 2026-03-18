import { Component, signal } from '@angular/core';
type Grade = 'A'| 'B'|'F'

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export default class ControlFlow {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  
  public toogleContent() {
    this.showContent.update(value =>!value );
  } 
}
