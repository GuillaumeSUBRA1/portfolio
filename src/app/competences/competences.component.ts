import { Component } from '@angular/core';

@Component({
  selector: 'competences',
  standalone: true,
  imports: [],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {
  technos: String[] = ['java', 'javascript', 'typescript', 'angular'];
}
