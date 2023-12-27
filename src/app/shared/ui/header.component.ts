import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="bg-slate-900 shadow-md shadow-amber-200">
      <div class="container  py-4 md:py-6">
        <span class="font-semibold text-amber-100 text-lg cursor-pointer" routerLink="/"> ToDo App</span>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
