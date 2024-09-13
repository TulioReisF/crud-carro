import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentCard: number = 0;
  items = [
    {
      title: 'REDCAR',
      description: 'Bem vindo ao CRUD de carros!!',
    },
    {
      title: 'Cadastro de Carros',
      description: 'Você pode cadastrar o carro para futuras buscas.',
    },
    {
      title: 'Tabela Interativa',
      description:
        'Possui uma tabela que é possivel ver e editar informações.',
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextCard() {
    if (this.currentCard < this.items.length - 1) {
      this.currentCard++;
    }
  }

  prevCard() {
    if (this.currentCard > 0) {
      this.currentCard--;
    }
  }

  navigateToCadastro() {
    this.router.navigate(['/cadastro-carro']);
  }

}
