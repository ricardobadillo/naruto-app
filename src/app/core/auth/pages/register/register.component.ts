// Angular.
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// RXJS.
import { timer } from 'rxjs';

// Servicios.
import { AuthService } from '../../../services/auth.service';
import { MessageService } from '../../../services/message.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide:    boolean = false;
  pattern: string | RegExp = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;

  miFormulario: FormGroup<{ username: FormControl<string | null>, email: FormControl<string | null>, password: FormControl<string | null> }>;


  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { 
    this.miFormulario = this.fb.group({
      username: ['', [ Validators.required, Validators.minLength(4) ]],
      email: ['', [ Validators.required, Validators.pattern(this.pattern) ]],
      password: ['', [Validators.required, Validators.minLength(6) ]]
    });
  }
  
  showPassword(): void {
    this.hide = !this.hide;
  };

  register(): void {
    const { username, email, password } = this.miFormulario.value;

    if (typeof username === 'string' && typeof email === 'string' && typeof password === 'string') {
      const delay = timer(2000);
    
      this.authService.register(username, email, password)
        .subscribe(valid => {
          if (valid === true) {
            this.messageService.usuarioCreado();
            delay.subscribe(() => {
              this.router.navigate(['/login']);
            });
          } else {
            this.messageService.sessionError(valid.error.message);
          };
        });
    };
  };
}
