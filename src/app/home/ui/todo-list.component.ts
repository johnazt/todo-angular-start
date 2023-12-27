import { Component, Input } from '@angular/core';
import Todo from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <h4 class="text-lg font-semibold text-slate-800 py-5">Todo List</h4>
    <ul class="space-x-7">
      @for (todo of todos; track $index) {
      <li class="flex flex-col bg-amber-100 text-slate-800 px-4 py-6 rounded-md font-semibold transition-opacity duration-75">
          <a class="text-lg" href="">{{ todo.title }}</a>
          <small class="text-gray-500">{{ todo.description }}</small>
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
