import { booleanAttribute, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  styleUrl: './title.css',
  templateUrl: './title.html',

})
export class Title {
  @Input({required:true}) title: string ='' 
  // @Input({transform:booleanAttribute}) withShadow:boolean=false
}
