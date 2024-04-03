import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StoreModule} from '@ngrx/store'
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StoreModule,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_app';
}
