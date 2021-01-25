import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReckButtonComponent } from './reck-button/reck-button.component';
import { ReckSelectComponent } from './reck-select/reck-select.component';
import { ReckInputComponent } from './reck-input/reck-input.component';
import { ReckCheckboxComponent } from './reck-checkbox/reck-checkbox.component';
import { ReckRadioComponent } from './reck-radio/reck-radio.component';
import { ReckModalComponent } from './reck-modal/reck-modal.component';
import { ReckPopoverComponent } from './reck-popover/reck-popover.component';
import { ReckSlidesComponent } from './reck-slides/reck-slides.component';

const EXPORTS = [
  ReckButtonComponent,
  ReckSelectComponent,
  ReckInputComponent,
  ReckCheckboxComponent,
  ReckRadioComponent,
  ReckModalComponent,
  ReckPopoverComponent,
  ReckSlidesComponent,
]
@NgModule({
  imports: [CommonModule],
  declarations: [...EXPORTS],
  exports: [...EXPORTS]
})
export class ComponentsModule {}
