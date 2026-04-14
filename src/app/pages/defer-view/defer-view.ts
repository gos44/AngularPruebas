import { Component } from '@angular/core';
import { HeavyLoadersSlow } from '@shared/heavy-loaders/heavy-loaders-slow';
import { Title } from "@shared/title/title";

@Component({
  selector: 'app-defer-view',
  imports: [HeavyLoadersSlow],
  templateUrl: './defer-view.html',
  styleUrl: './defer-view.css',
})
export default class DeferView {


}
