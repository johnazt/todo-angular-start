import { Component, Input, OnInit } from '@angular/core';
import Todo from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <h4 class="text-lg font-semibold text-slate-800 py-5">Todo List</h4>
    <ul class="space-x-7">
      @for (todo of todos; track $index) {
      <li>
        <a href="">{{ todo.title }}</a>
      </li>
      } @empty {
      <li class="text-center italic">Nothing to do! 😅</li>
      }
    </ul>
  `,
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
}
