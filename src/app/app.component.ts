import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './features/map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, MapComponent],
})
export class AppComponent {
  title = 'air-quality-now';
}
