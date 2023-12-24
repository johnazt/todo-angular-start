import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div class="container ">
    <router-outlet></router-outlet>
  </div>
  `
})

export class LayoutComponent {}
