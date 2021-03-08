import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
  OverlayRef,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { ReckOverlayRef } from './overlay-ref';
export interface ReckOverlayConfig {
  // the anchor point for your overlay positioning
  elementRef?: ElementRef;
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  height?: string;
  width?: string;
  positions?: ConnectedPosition[];
  disableClose?: boolean;
  tabToClose?: boolean;
}
const DEFAULT_CONFIG: ReckOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'reck-overlay-backdrop',
  panelClass: 'reck-overlay-panel',
  height: '400px',
  width: '600px',
  disableClose: false,
  tabToClose: false,
};
@Injectable()
export class ReckOverlayService {
  /**
   *
   * Overlay Service should only concern itself with
   * 1. whether it is open or closed
   * 2. position of where it is anchored
   * 3. other style customizations
   *
   */
  constructor(
      private overlay: Overlay,
      private overlayPositionBuilder: OverlayPositionBuilder,
      private readonly sso: ScrollStrategyOptions
  ) {}
  open<T>(template: ComponentType<T>, config: ReckOverlayConfig = DEFAULT_CONFIG): ReckOverlayRef {
      const overlayRef: OverlayRef = this.overlay.create(this.getOverlayConfig(config));
      const overlayPortal = new ComponentPortal(template);
      overlayRef.attach(overlayPortal);
      let ref: ReckOverlayRef = new ReckOverlayRef(
          overlayRef,
          config.disableClose,
          config.tabToClose
      );
      this.onClickOverlay(ref, config);
      return ref;
  }
  // detect clicks on background and close
  onClickOverlay(ref: ReckOverlayRef, config: ReckOverlayConfig) {
      if (!config.disableClose) {
          ref.overlayRef
              .backdropClick()
              .pipe(take(1))
              .subscribe(() => {
                  this.close(ref);
              });
      }
  }
  // closes the overlay
  close(ref: ReckOverlayRef) {
      // detach backdrop only removes the backdrop
      ref.overlayRef.detachBackdrop();
      // detach removes the overlay from the portal
      // in effect closing the popup
      ref.overlayRef.detach();
      // dispose cleans up the overlay from the dom
      ref.overlayRef.dispose();
  }
  private getOverlayConfig(config: ReckOverlayConfig): OverlayConfig {
      let positionStrategy: FlexibleConnectedPositionStrategy | GlobalPositionStrategy;
      if (config.elementRef && config.positions) {
          positionStrategy = this.overlayPositionBuilder
              .flexibleConnectedTo(config.elementRef)
              .withPositions([...config.positions]);
      } else {
          positionStrategy = this.overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically();
      }
      // if you call the open method too early and the page isn't scrollable, the block() will not work
      const scrollStrategy = this.sso.block();
      const overlayConfig = new OverlayConfig({
          width: config.width,
          height: config.height,
          hasBackdrop: config.hasBackdrop,
          backdropClass: config.backdropClass,
          panelClass: config.panelClass,
          scrollStrategy,
          positionStrategy,
      });
      return overlayConfig;
  }
}