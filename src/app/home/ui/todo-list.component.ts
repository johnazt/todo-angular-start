import { Component, Input } from '@angular/core';
import Todo from '../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [RouterLink],
  template: `
    <h4 class="text-lg font-semibold text-slate-800 pt-10">Todo List</h4>
    <ul class="py-5">
      @for (todo of todos; track todo.id) {
      <li class="flex flex-col bg-amber-100 text-slate-800 px-4 py-6 rounded-md font-semibold mb-4">
          <a class="text-lg" routerLink="/detail/{{todo.id}}">{{ todo.title }}</a>
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
