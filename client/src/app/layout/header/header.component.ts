import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatBadge,
    RouterLink,
    RouterLinkActive,
    RouterLinkActive,
    MatProgressSpinnerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}