import { Component } from '@angular/core';
import { Title } from "@shared/title/title"; 

@Component({
  selector: 'app-view-transition',
  imports: [Title], 
  styleUrl: './view-transition.css',
  template: `
    <app-title title="View Transition 1"></app-title>
    <section class="flex justify-start" style="view-transition-name: page-section">
      <img class="border border-red-900 rounded-lg shadow-lg" 
           srcset="https://picsum.photos/id/237/200/300" 
           alt="sukuna-de-jujutsu-kaisen" 
           width="200" 
           height="300"
           style="view-transition-name: hero1"/>
      <div class="bg-red-700 max-w-64 h-64 p-4 rounded-lg shadow-lg flex items-center justify-center text-white font-bold" style="view-transition-name: hero2">
        <p class="text-center">Contenido inicial - Página 1</p>
      </div>
    </section>
  ` 
})
export default class ViewTransition {
  
}