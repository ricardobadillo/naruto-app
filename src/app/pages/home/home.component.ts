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

  ninjas = [
    { id: 1, name: 'Naruto' },
    { id: 2, name: 'Sasuke' },
    { id: 3, name: 'Sakura' },
  ];
}
