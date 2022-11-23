// Angular.
import { Injectable } from '@angular/core';

// Angular Material.
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor( private snackbar: MatSnackBar ) { }
  
  sessionError(message: string): void {
    this.snackbar.open(message, '', {
      duration: 3000
    });
  };

  usuarioCreado(): void {
    this.snackbar.open('El usuario ha sido creado satisfactoriamente', '', {
      duration: 500
    });
  };
}
