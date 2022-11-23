// Angular.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes.
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

// Módulos.
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ LoginComponent, RegisterComponent ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
    SharedModule
  ]
})
export class CoreModule { }
