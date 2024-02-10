import { Component } from "@angular/core";
import { ObservableComponent } from "./ui/observables.component";

@Component({
  selector: "app-rxjs",
  standalone: true,
  imports: [ObservableComponent],
  template: `
    <h1 class="text-2xl py-4 font-semibold">Rxjs Module</h1>
    <app-observable/>
  `,
  styles: ``
})

export default class RxjsComponent {}
