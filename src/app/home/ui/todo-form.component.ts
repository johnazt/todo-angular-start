import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Todo from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form
      class=" flex flex-col gap-3 space-y-4"
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
    >
      <input
        class="shadow-md p-3 rounded-md"
        type="text"
        formControlName="title"
        placeholder="title..."
      />
      <input
        type="text"
        class="shadow-md p-3 rounded-md"
        formControlName="description"
        placeholder="description..."
      />
      <button class="bg-slate-900 text-white rounded-md p-3 disabled:opacity-45" type="submit" [disabled]="!todoForm.valid">
        Add todo
      </button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);
  @Output() todoSubmitted = new EventEmitter<Todo>();

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
