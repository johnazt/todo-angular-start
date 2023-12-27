import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoService } from '../shared/data-access/todo.service';

@Component({
  standalone: true,
  selector: 'app-detail',
  imports: [RouterLink],
  template: `
    <div class="bg-teal-100 p-4 text-slate-900 font-semibold h-screen">
      <div class="flex justify-between">

        <h4 class="text-2xl mb-6">Detail page</h4>
        <a routerLink="/" class="font-bold text-2xl cursor-pointer"><--</a>
      </div>

      @if (todo(); as todo) {
        <h2 class="text-3xl text-slate-800 mb-4">{{ todo.title }}</h2>
        <p class="text-base text-slate-600">{{ todo.description }}</p>
      }@else {
        <p class="italic text-center text-lg">Could not find todo</p>
      }
    </div>
  `,
  styles: ``,
})
export default class DetailComponent {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);
  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
