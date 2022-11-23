// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes.
import { AddComponent } from './pages/add/add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

// Módulos.
import { NarutoRoutingModule } from './naruto-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddComponent,
    DashboardComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    
    NarutoRoutingModule,
    SharedModule
  ]
})
export class NarutoModule { }
