import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatFormFieldModule,
    Material.MatSelectModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatProgressSpinnerModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatInputModule,
    Material.MatPaginatorModule 
  ],
  exports: [
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatSelectModule,
    Material.MatInputModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatProgressSpinnerModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatInputModule,
    Material.MatPaginatorModule 
  ]
})
export class MaterialModule {}