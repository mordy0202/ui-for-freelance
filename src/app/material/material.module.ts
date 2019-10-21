import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, 
    MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatSelectModule, MatAutocompleteModule, MatSidenavModule,
    MatIconModule, MatListModule, MatCardModule, MatTreeModule,
    MatGridListModule, MatSliderModule, MatMenuModule, MatChipList, MatChip, MatChipsModule
  } from '@angular/material';
// import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSelectModule, MatAutocompleteModule, MatSidenavModule, MatIconModule, MatListModule, MatTree, MatTreeModule, MatCardModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatTreeModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule
  ], exports:[
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSliderModule,
    MatTreeModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
