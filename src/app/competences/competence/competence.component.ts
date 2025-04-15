import { Component, input } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'competence',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.scss'
})
export class CompetenceComponent {
  image = input<string>();
  valeur = input<number>();  
  type = input.required<string>();
}
