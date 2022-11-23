// Angular.
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Servicios.
import { AuthService } from '../../../services/auth.service';
import { MessageService } from '../../../services/message.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: boolean = false;
  
  miFormulario: FormGroup<{ email: FormControl<string | null>, password: FormControl<string | null> }>;
  

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private fb: FormBuilder, 
    private router: Router 
  ) { 
    this.miFormulario = this.fb.group({
      email: ['', [ Validators.required, Validators.minLength(4) ]],
      password: ['', [ Validators.required ]]
    });
  }
  
  showPassword(): void {
    this.hide = !this.hide;
  }
  
  login(): void {
    const { email, password } = this.miFormulario.value;

    if (typeof email === 'string' && typeof password === 'string') {
      this.authService.login(email, password)
      .subscribe(valid => {
        if (valid === true) {
          this.router.navigate(['/naruto'])
        } else {
          if (typeof valid.error.message === 'string') {
            this.messageService.sessionError(valid.error.message);
          } else if (typeof valid.error.message === 'object' && valid.error.message['email']) {
            this.messageService.sessionError(valid.error.message['email']['msg'])
          } else if (typeof valid.error.message === 'object' && valid.error.message['password']) {
            this.messageService.sessionError(valid.error.message['password']['msg'])
          };
        };
      });
    };
  };
}
