import { Component, Input } from '@angular/core';
 import { Product } from '../../../shared/models/product';
 import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
 import { MatIcon } from '@angular/material/icon';
 import { CurrencyPipe } from '@angular/common';
 import { MatButton } from '@angular/material/button';
 
 @Component({
   selector: 'app-product-item',
   standalone: true,
   imports: [
     MatCard,
     MatCardContent,
     MatCardActions,
     MatIcon,
     CurrencyPipe,
   ],
   templateUrl: './product-item.component.html',
   styleUrl: './product-item.component.scss'
 })
 export class ProductItemComponent {
   @Input() product?: Product;
 }