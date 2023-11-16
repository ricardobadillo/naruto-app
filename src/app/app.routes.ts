// Angular.
import { Routes } from '@angular/router';

// Componentes.
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Naruto App' },
    { path: 'search', component: SearchComponent, title: 'Buscador de ninjas' },
];
