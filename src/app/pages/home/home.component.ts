import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showText = true;

  ninjas = [
    { id: 1, name: 'Naruto' },
    { id: 2, name: 'Sasuke' },
    { id: 3, name: 'Sakura' },
  ];

  changeState(): void {
    this.showText = !this.showText;
  }
}
