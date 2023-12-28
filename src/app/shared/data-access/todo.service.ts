import { Injectable, signal } from '@angular/core';
import Todo, { CreateTodo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);

  todos = this.#todos.asReadonly();

  constructor() {
    const storeTodos = localStorage.getItem('todos');

    if (storeTodos) {
      this.#todos.set(JSON.parse(storeTodos));
    }
  }

  addTodo(todo: CreateTodo) {
    this.#todos.update((todos) => {
      const updatedTodos = [
        ...todos,
        {
          ...todo,
          id: Date.now().toString(),
        },
      ];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));

      return updatedTodos;
    });
  }

  deleteTodo(id: string) {
    this.#todos.update((todos) => {
      const newTodosAfterDeleted = todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(newTodosAfterDeleted));

      return newTodosAfterDeleted;
    });
  }
}
