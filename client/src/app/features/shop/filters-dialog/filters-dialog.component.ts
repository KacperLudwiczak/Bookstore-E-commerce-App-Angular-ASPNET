import { Component, inject } from '@angular/core';
 import { ShopService } from '../../../core/services/shop.service';
 import { MatDivider } from '@angular/material/divider';
 import { MatListOption, MatSelectionList } from '@angular/material/list';
 import { MatButton } from '@angular/material/button';
 import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
 import { FormsModule } from '@angular/forms';
 
 @Component({
   selector: 'app-filters-dialog',
   standalone: true,
   imports: [
     MatSelectionList,
     MatListOption,
     FormsModule
   ],
   templateUrl: './filters-dialog.component.html',
   styleUrl: './filters-dialog.component.scss'
 })
 export class FiltersDialogComponent {
   shopService = inject(ShopService);
   private dialogRef = inject(MatDialogRef<FiltersDialogComponent>);
   data = inject(MAT_DIALOG_DATA);
 
   selectedGenre: string[] = this.data.selectedGenre;
   selectedPublisher: string[] = this.data.selectedPublisher;
 
   applyFilters() {
     this.dialogRef.close({
      selectedGenre: this.selectedGenre,
      selectedPublisher: this.selectedPublisher
     })
   }
 
 }