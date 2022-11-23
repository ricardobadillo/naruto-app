// Angular.
import { Injectable } from '@angular/core';

// Angular Material.
import { MatSidenav } from '@angular/material/sidenav';



@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    if (this.sidenav.opened) {
      return this.sidenav.close();
    } else {
      return;
    }
  }
  
  public toggle() {
    return this.sidenav.toggle();
  }
}
