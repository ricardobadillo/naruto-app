// Angular.
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

// RXJS.
import { Observable, tap } from 'rxjs';

// Servicios.
import { AuthService } from '../services/auth.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private router: Router, private authService: AuthService ) { }
  
  canActivate(): Observable<boolean> | boolean {
    return this.authService.validateToken()
      .pipe(
        tap(valid => {
          if (!valid) this.router.navigate(['/auth/login']);
        })
      );
  };
  
  canLoad(): Observable<boolean> | boolean {
    return this.authService.validateToken()
      .pipe(
        tap(valid => {
          if (!valid) this.router.navigate(['/auth/login']);
        })
      );
  };
}
