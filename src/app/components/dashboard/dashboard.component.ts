// Angular.
import { Component } from '@angular/core';

// Angular Material.
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MatIconModule, MatSidenavModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
