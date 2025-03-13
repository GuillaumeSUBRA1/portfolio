import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'formation',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormationComponent {

  formation = [
    {
      titre: "Master 2 Informatique",
      ecole: "Université de Rennes",
      date: 2022
    },
    {
      titre: "Master 1 Informatique",
      ecole: "Université de la Réunion",
      date: 2021
    },
    {
      titre: "Licence Informatique",
      ecole: "Université de la Réunion",
      date: 2020
    }
  ]
}
