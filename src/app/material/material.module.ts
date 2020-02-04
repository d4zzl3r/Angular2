import { NgModule } from '@angular/core';
import { MatInputModule,MatButtonModule, MatToolbarModule } from '@angular/material';
// import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


const MaterialComponent =
[
  MatButtonModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatFormFieldModule
]
@NgModule({
  declarations: [],
  imports: [],
  exports : [MaterialComponent  ]
})
export class MaterialModule { }
