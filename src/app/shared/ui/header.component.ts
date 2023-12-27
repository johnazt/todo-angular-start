import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-slate-900 shadow-md shadow-amber-200">
      <div class="container  py-4 md:py-6">
        <span class="font-semibold text-amber-100 text-lg"> ToDo App</span>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
