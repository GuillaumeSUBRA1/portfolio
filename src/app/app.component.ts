import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationComponent } from './formation/formation.component';
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { ProjetsComponent } from "./projets/projets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopBarComponent, HomeComponent, CompetencesComponent, FormationComponent, ContactComponent, 
    ContactComponent, ServicesComponent, ProjetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
