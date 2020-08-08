import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OndestroyService extends Subject<void> implements OnDestroy {
  public ngOnDestroy(): void {
      this.next();
      this.complete();
  }
}
