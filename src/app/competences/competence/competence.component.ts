import { Component, input } from '@angular/core';

@Component({
  selector: 'competence',
  standalone: true,
  imports: [],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.scss'
})
export class CompetenceComponent {

  image = input.required<string>();
  type = input.required<string>();

}
