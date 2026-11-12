import { Component, signal } from '@angular/core';
import { Conhecimento } from '../../models/conhecimento.model';

@Component({
  selector: 'app-conhecimento',
  standalone: true,
  imports: [],
  templateUrl: './conhecimento.component.html',
  styleUrl: './conhecimento.component.scss'
})
export class ConhecimentoComponent {
  conhecimentosIcon = signal<Conhecimento[]>([
    { class: 'fa-brands fa-html5' },
    { class: 'fa-brands fa-css3-alt' },
    { class: 'fa-brands fa-js' },
    { class: 'fa-brands fa-typescript' },
    { class: 'fa-brands fa-angular' },
  ]);
}
