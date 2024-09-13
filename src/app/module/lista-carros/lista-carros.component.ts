import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/core/services/cars.service';
import { Carro } from '../../core/models/carro';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.scss']
})
export class ListaCarrosComponent implements OnInit {
  carros: Carro[] =[]
  success: boolean = false;
  delete: boolean = false;

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.service.getCarros().subscribe({
      next: (res: any) => {
        this.carros = res;
        console.log(this.carros)
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  editarCarro(carro: Carro) {
    carro.editando = true;
  }

  cancelarEdicao(i: number) {
    this.carros[i].editando = false;
  }

  salvarEdicao(carro: Carro) {
    carro.editando = false;
    this.service.atualizarCarro(carro).subscribe({
      next: () => {
        this.success = true;
        window.location.reload()
      },
      error: (err) => {
        console.error('Erro ao atualizar o carro:', err);
      },
    });
  }

  apagarCarro(carro: Carro) {
    this.service.apagarCarro(carro.id).subscribe({
      next: () => {
        this.carros = this.carros.filter(
          (item) => item.id !== carro.id
        );
        this.delete = true;
        window.location.reload()
      },
      error: (err) => {
        console.error('Erro ao apagar o carro:', err);
      },
    });
  }

}
