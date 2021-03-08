import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ReckOverlayConfig } from '../services/overlay.service';

export const RECK_MODAL_CONFIG: ReckOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'reck-modal-backdrop',
  panelClass: 'reck-modal-panel',
  disableClose: false,
  tabToClose: false,
};

@Component({
  selector: 'reck-modal',
  templateUrl: './reck-modal.component.html',
  styleUrls: ['./reck-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReckModalComponent implements OnInit {
  @ViewChild('modal', { static: true}) modal: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
}
