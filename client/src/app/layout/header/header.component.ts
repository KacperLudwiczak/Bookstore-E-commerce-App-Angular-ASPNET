import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CartService } from '../../core/services/cart.service';
import { BusyService } from '../../core/services/busy.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatBadge,
    RouterLink,
    RouterLinkActive,
    RouterLinkActive,
    MatProgressBarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartService = inject(CartService);
  busyService = inject(BusyService);
}