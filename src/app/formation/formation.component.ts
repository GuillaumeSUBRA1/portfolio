import { Component } from '@angular/core';

@Component({
  selector: 'formation',
  standalone: true,
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {

  formation = [
    {
      titre: "Licence Informatique",
      ecole: "Université de la Réunion",
      date: 2020
    },
    {
      titre: "Master 1 Informatique",
      ecole: "Université de la Réunion",
      date: 2021
    },
    {
      titre: "Master 2 Informatique",
      ecole: "Université de Rennes",
      date: 2022
    }
  ]
}
