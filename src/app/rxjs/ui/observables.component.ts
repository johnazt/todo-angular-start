import { Component } from '@angular/core';

@Component({
  selector: 'app-observable',
  standalone: true,
  template: `
    <h2 class="text-lg font-semibold mb-2">Observables</h2>
    <blockquote class="leading-7">
      <strong
        >Son la representación de un objeto que transmite un flujo de datos de
        manera asíncrona.</strong
      >
      Esto podría ser representado como si fuera un canal de televisión, en
      donde las noticias es el flujo de datos y los televidentes los
      <strong>suscriptores</strong>.
    </blockquote>
  `,
  styles: ``,
})
export class ObservableComponent {
  constructor() {
    this.observer$();
  }

  observer = {
    next: (data: number) => console.log(`this is my data ${data}`),
    complete: () => console.log('data is completed'),
  }

  observer$ = () => {
    this.observer.next(1)
    this.observer.next(3)
    this.observer.next(4)
    this.observer.complete()
  }



}
