import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="bg-slate-900 shadow-md shadow-amber-200">
      <div class="container  py-4 md:py-6 flex justify-between">
        <span class="font-semibold text-amber-100 text-lg cursor-pointer" routerLink="/"> ToDo App</span>
        <ul>
          <li class="text-white cursor-pointer hover:text-pink-300 transition-all duration-500" routerLink="rxjs">
            Rxjs
          </li>
        </ul>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
