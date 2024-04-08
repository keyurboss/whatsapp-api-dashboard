import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiFlagService {
  private loaderStatus = signal(0);
  loader$ = this.loaderStatus.asReadonly();

  startLoader() {
    this.loaderStatus.set(this.loader$() + 1);
  }
  stopLoader() {
    this.loaderStatus.set(this.loader$() - 1);
  }
}
