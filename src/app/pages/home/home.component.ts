import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ConhecimentoComponent } from './components/conhecimento/conhecimento.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProjetoComponent } from './components/projeto/projeto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ConhecimentoComponent, ExperienciaComponent, ProjetoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
