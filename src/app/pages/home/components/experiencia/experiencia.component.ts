import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Experiencia } from '../../models/experiencia.model';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  experiencias = signal<Experiencia[]>([
    { titulo: 'Desenvolvedora Front-end', descricao: 'Perinity | Remoto | Jul 2024 - Out 2026', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { titulo: 'Desenvolvedora Front-end', descricao: 'Dix Digital | Remoto | Out 2022 - Jun 2025', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ])
}
