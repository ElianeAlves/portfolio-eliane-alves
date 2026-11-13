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
      imagem: 'assets/projetos/empresarialembalagens.png',
      link: {
        href: 'https://empresarialembalagens.com.br/',
        nome: 'Empresarial Embalagens'
      }
    },
    {
      titulo: 'LN Leilões',
      icone: 'icone-do-projeto-2',
      imagem: 'assets/projetos/lnleiloes.png',
      link: {
        href: 'https://www.lnleiloes.com.br/inicio',
        nome: 'LN Leilões'
      }
    },
    {
      titulo: 'Gralha Azul Leilões',
      icone: 'icone-do-projeto-4',
      imagem: 'assets/projetos/gralhaazulleiloes.png',
      link: {
        href: 'https://gralhaazulleiloes.com.br/inicio',
        nome: 'Gralha Azul Leilões'
      }
    },
    {
      titulo: 'Nema Assessoria',
      icone: 'icone-do-projeto-6',
      imagem: 'assets/projetos/nemassessoria.png',
      link: {
        href: 'https://nemassessoria.com.br/inicio',
        nome: 'Nema Assessoria'
      }
    }
  ]);
}
