import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import Todo from '../shared/interfaces/todo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent],
  template: `
    <h2 class="text-lg font-semibold text-slate-800 py-5 italic">To Do</h2>
    <app-todo-form (todoSubmitted)="createTodo($event)" />
  `,
  styles: ``,
})
export default class HomeComponent {
  createTodo(todo: Todo) {
    console.log(todo);
  }
}
