import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import Todo from '../shared/interfaces/todo';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  template: `
    <h2 class="text-lg font-semibold text-slate-800 py-5 italic">To Do</h2>
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
    <app-todo-list [todos]="todoService.todos()" ></app-todo-list>
  `,
  styles: ``,
})
export default class HomeComponent {
  todoService = inject(TodoService)
}
