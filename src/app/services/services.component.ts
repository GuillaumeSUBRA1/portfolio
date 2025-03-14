import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'services',
  standalone: true,
  imports: [FieldsetModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services = [
    {
      titre: "Développement Web",
      description: "Création et maintenance de sites web interactifs et performants.",
      icon: "web"
    },
    {
      titre: "Développement Mobile",
      description: "Création et maintenance d'applications mobiles interactives et performantes.",
      icon: "web"
    },
    {
      titre: "Création portfolio",
      description: "Création d'un portfolio personnalisé.",
      icon: "portfolio"
    },
    {
      titre: "Modèle de données",
      description: "Création de modèles de données pour les applications.",
      icon: "database"
    }
  ]
}
