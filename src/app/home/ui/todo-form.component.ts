import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form class="pt-10 flex flex-col gap-3 space-y-3" [formGroup]="todoForm">
      <input
        class="shadow-md p-3"
        type="text"
        formControlName="title"
        placeholder="title..."
      />
      <input
        type="text"
        class="shadow-md p-3"
        formControlName="description"
        placeholder="description..."
      />
      <button class="bg-slate-900 text-white rounded-md p-3" type="submit">Add todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
