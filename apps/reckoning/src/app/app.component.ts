import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RECK_MODAL_CONFIG } from 'libs/components/src/lib/reck-modal/reck-modal.component';
import { ReckOverlayRef } from 'libs/components/src/lib/services/overlay-ref';
import { ReckOverlayService } from 'libs/components/src/lib/services/overlay.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'artesgo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title$ = new BehaviorSubject('Growcery');
  year;
  dark = false;
  map = true;

  constructor(
    private renderer: Renderer2,
    private overlayService: ReckOverlayService,
    ) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
    this.toggleDarkMode();
  }

  toggleDarkMode() {
    if (this.dark) {
      this.dark = false;
      this.renderer.removeClass(document.body, 'dark-mode');
    } else {
      this.dark = true;
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

  toggleMap() {
    this.map = !this.map;
  }

  overlayRef: ReckOverlayRef
  open() {
    if (!this.overlayRef || this.overlayRef.closed) {
      let config = RECK_MODAL_CONFIG;
      this.overlayRef = this.overlayService.open(AddComponent, config);
      this.overlayRef
          .afterClosed()
          .pipe(take(1))
          .subscribe(() => console.log(`log after close`));
    }
  }
}
