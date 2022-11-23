// Angular.
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { AuthResponse } from '../models/auth-response';
import { Usuario } from '../models/usuario';

// RXJS.
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

// Variables de entorno.
import { environment } from '../../../environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private dataUsuario = new BehaviorSubject<Usuario | null>(null);
  // private _usuario!: Usuario;

  usuario$ = this.dataUsuario.asObservable();

  // get usuario() {
  //   return {... this._usuario};
  // };

  
  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    const endpoint: string = `${this.baseUrl}/auth/register`;
    const body = { username, email, password };
    
    return this.http.post<AuthResponse>(endpoint, body)
      .pipe(
        map(response => response.ok),
        catchError(error => of(error))
      );
  };

  login(email: string, password: string): Observable<any> {
    const endpoint = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>(endpoint, body)
      .pipe(
        tap(response => {
          if (response.ok === true) {
            localStorage.setItem('token', response.token!);
            // this.dataUsuario.next({ uid: response.uid!, username: response.username!, email: response.email! });
            // this._usuario = { uid: response.uid!, username: response.username!, email: response.email! };
          };
        }),
        map(valid => valid.ok),
        catchError(error => of(error))
      );
  };
  
  logout(): void {
    localStorage.clear();
  };

  validateToken(): Observable<boolean> {
    const endpoint = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(endpoint, { headers })
      .pipe(
        tap(response => {
          this.dataUsuario.next({ uid: response.uid!, username: response.username!, email: response.email! });
        }),
        map(response => { return response.ok }),
        catchError(error => of(false))
      );
  };
}
