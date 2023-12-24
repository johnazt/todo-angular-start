import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="bg-slate-900 shadow-md shadow-amber-200">
      <div class="container mx-auto p-4 md:p-6">
        <span class="font-semibold text-amber-100 text-lg"> ToDo App</span>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
