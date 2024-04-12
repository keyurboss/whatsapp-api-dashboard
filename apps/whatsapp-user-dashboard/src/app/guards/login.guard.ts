import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(private router:Router) {}

  isLogin() {
    return true;   
  }
}
