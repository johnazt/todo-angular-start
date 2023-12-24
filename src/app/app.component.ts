import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/ui/header/header.component';
import { LayoutComponent } from './shared/ui/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LayoutComponent],
  template: `
    <app-header></app-header>
    <app-layout> </app-layout>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'todo-angular-start';
}
