import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReckHeaderComponent } from './reck-header/reck-header.component';
import { ReckFooterComponent } from './reck-footer/reck-footer.component';
import { ReckParallaxComponent } from './reck-parallax/reck-parallax.component';

const EXPORTS = [
  ReckHeaderComponent,
  ReckFooterComponent,
  ReckParallaxComponent,
]
@NgModule({
  imports: [CommonModule],
  declarations: [...EXPORTS],
  exports: [...EXPORTS]
})
export class LayoutsModule {}
