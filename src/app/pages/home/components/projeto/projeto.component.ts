import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.scss'
})
export class ProjetoComponent {
  projetos = signal([
    {
      titulo: 'Empresarial Embalagens',
      icone: 'icone-do-projeto-1',
      link: {
        href: 'https://empresarialembalagens.com.br/',
        nome: 'Empresarial Embalagens'
      }
    },
    {
      titulo: 'LN Leilões',
      icone: 'icone-do-projeto-2',
      link: {
        href: 'https://www.lnleiloes.com.br/inicio',
        nome: 'LN Leilões'
      }
    },
    {
      titulo: 'Camargo Agronegócios',
      icone: 'icone-do-projeto-3',
      link: {
        href: 'https://camargoagronegocios.com.br/home',
        nome: 'Camargo Agronegócios'
      }
    },
    {
      titulo: 'Gralha Azul Leilões',
      icone: 'icone-do-projeto-4',
      link: {
        href: 'https://gralhaazulleiloes.com.br/inicio',
        nome: 'Gralha Azul Leilões'
      }
    },
    {
      titulo: 'Lance Prime',
      icone: 'icone-do-projeto-5',
      link: {
        href: 'https://lanceprime.com.br/home',
        nome: 'Lance Prime'
      }
    },
    {
      titulo: 'Nema Assessoria',
      icone: 'icone-do-projeto-6',
      link: {
        href: 'https://nemassessoria.com.br/inicio',
        nome: 'Nema Assessoria'
      }
    }
  ]);
}
