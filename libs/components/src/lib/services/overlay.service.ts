import { ElementRef, Injectable } from '@angular/core';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ConnectedPosition, Overlay, ScrollStrategy } from '@angular/cdk/overlay';

export interface ReckedModalConfig {
  elementRef?: ElementRef,
  panelClass?: string,
  backdropClass?: string,
  hasBackdrop?: boolean,
  height?: string,
  width?: string,
  positions?: ConnectedPosition,
  tabClose?: boolean,
  scrollStrategy?: ScrollStrategy,
  disableClose?: boolean,
}

export const RECKED_MODAL_DEFAULTS: ReckedModalConfig = {
  hasBackdrop: true,
  backdropClass: 'recked-modal-backdrop',
  panelClass: 'recked-modal-panel',
  height: '300px',
  width: '450px',
  disableClose: false,
  tabClose: true,
}

@Injectable({
  providedIn: 'root'
})
export class ReckOverlayService {

  constructor(private overlay: Overlay) { }

  open<T>(template: ComponentType<T>, config: ReckedModalConfig) {
    const overlayRef = this.overlay.create();
    const templatePortal = new ComponentPortal(template);
    overlayRef.attach(templatePortal);
    this.clickOverlay(overlayRef, config)
    return overlayRef;
  }

  clickOverlay(overlayRef, config: ReckedModalConfig) {

  }

  createConfig(config: ReckedModalConfig) {

  }
}
