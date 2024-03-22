import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { standAloneDirective } from './standAlone.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, standAloneDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playground';
}
