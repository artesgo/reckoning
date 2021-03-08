import { ESCAPE, TAB } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export class ReckOverlayRef<R = any> {
    _beforeClosed = new Subject<R | undefined>();
    _afterClosed = new Subject<R | undefined>();
    _afterOpened = new Subject<void>();
    private _closed: boolean = false;
    get closed(): boolean {
        return this._closed;
    }
    constructor(
        public overlayRef: OverlayRef,
        public disableClose: boolean,
        public tabToClose: boolean
    ) {
        overlayRef.detachments().subscribe(() => {
            this._closed = true;
            this._afterClosed.next();
        });
        overlayRef
            .keydownEvents()
            .pipe(
                filter(() => !this.disableClose),
                filter((event: KeyboardEvent) => {
                    if (event.keyCode) {
                        return event.keyCode === ESCAPE || (tabToClose && event.keyCode === TAB);
                    } else {
                        return event.key === 'Escape' || (tabToClose && event.key === 'Tab');
                    }
                })
            )
            .subscribe((event) => {
                this.close();
            });
    }
    afterOpened(): Observable<void> {
        return this._afterOpened.asObservable();
    }
    afterClosed(): Observable<R | undefined> {
        return this._afterClosed.asObservable();
    }
    beforeClosed(): Observable<R | undefined> {
        return this._beforeClosed.asObservable();
    }
    close(): void {
        this.overlayRef.detach();
    }
}