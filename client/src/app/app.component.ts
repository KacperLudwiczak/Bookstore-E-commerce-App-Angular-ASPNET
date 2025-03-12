import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BusyService } from './core/services/busy.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bookstore';
  busyService = inject(BusyService);
}
