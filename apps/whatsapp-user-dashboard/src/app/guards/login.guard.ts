import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor() {}

  isLogin() {
    return true;   
  }
}
