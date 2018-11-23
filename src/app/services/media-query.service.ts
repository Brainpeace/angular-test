import { Injectable, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable()
export class MediaQueryService {
    public changeDetectionEmitter: EventEmitter<void> = new EventEmitter<void>();
    public mobileQuery: MediaQueryList;
    public desktopQuery: MediaQueryList;

    public _mobileQueryListener: () => void;
    public _desktopQueryListener: () => void;

    constructor(
        public media: MediaMatcher
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 800px)');
        this.desktopQuery = media.matchMedia('(min-width: 1300px)');

        //this._mobileQueryListener = () => ChangeDetectorRef.detectChanges();
        //this._desktopQueryListener = () => ChangeDetectorRef.detectChanges();
    }

    addQueryListener() {
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.desktopQuery.addListener(this._mobileQueryListener);
    }
    getMobileQuery() {
        return this.mobileQuery;
    }

    getDesktopQuery() {
        return this.desktopQuery;
    }

    removeEventListeners(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.desktopQuery.removeListener(this._desktopQueryListener);
    }
}
