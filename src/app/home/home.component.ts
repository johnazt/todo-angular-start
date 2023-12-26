import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent],
  template: `
    <app-todo-form></app-todo-form>
  `,
  styles: ``
})
export default class HomeComponent {

}
