// Angular.
import { Component, signal } from '@angular/core';

interface Persona {
  nombre: string;
  edad: number;
}



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  name = signal('Ricardo');
  arrayData = signal(['Primera palabra']);
  personas = signal<Persona[]>([ { nombre: 'Ricardo', edad: 25 } ]);

  changeName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
  
  putWord(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.arrayData.update((previousValue) => [ ...previousValue, input.value ]);
  }
  
  deleteWord(index: number): void {
    this.arrayData.update((previousValue) => previousValue.filter((_, i) => i !== index));
  }

  putPerson(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.personas.update((previousValue) => [ ...previousValue, { nombre: input.value, edad: 25 } ]);
  }
}
