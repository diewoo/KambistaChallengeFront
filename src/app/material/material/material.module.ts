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
    Material.MatTableModule
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
    Material.MatTableModule
  ]
})
export class MaterialModule {}