import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, FeatureListComponent],
  exports: [LoginComponent]
})
export class GroceryModule {}
