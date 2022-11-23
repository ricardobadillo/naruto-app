// Angular.
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Angular Material.
import { MatSidenav } from '@angular/material/sidenav';

// Modelos.
import { SidenavConfig } from '../../../core/models/sidenav-config';
import { Usuario } from '../../../core/models/usuario';

// Servicios.
import { AuthService } from '../../../core/services/auth.service';
import { SidenavService } from '../../../core/services/sidenav.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  
  sidenavConfigData: SidenavConfig[] = [
    {
      items: [
        { route: 'add', title: 'Agregar ninja', urlImage: 'assets/images/add.png' },
        { route: 'home', title: 'Lista de ninjas', urlImage: 'assets/images/ninja.png' },
        { route: 'search', title: 'Buscar ninja', urlImage: 'assets/images/search.png' },
      ],
    },
    {
      items: [
        { route: 'add', title: 'Agregar ninja', urlImage: 'assets/images/add.png' },
        { route: 'home', title: 'Lista de ninjas', urlImage: 'assets/images/ninja.png' },
        { route: 'search', title: 'Buscar ninja', urlImage: 'assets/images/search.png' },
      ],
    },
  ];
  
  @ViewChild('sidenavReference') public sidenavReference!: MatSidenav;

  // get usuario(): Usuario {
  //   return this.authService.usuario;
  // };

  
  constructor( 
    private authService: AuthService,
    private sidenavService: SidenavService,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.authService.usuario$.subscribe(data => console.log(data));
  };
    
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenavReference);
  };

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  };
}
