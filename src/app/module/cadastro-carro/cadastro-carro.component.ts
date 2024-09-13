import { Component, OnInit } from '@angular/core';
import { Carro } from '../../core/models/carro';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/core/services/cars.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.scss']
})
export class CadastroCarroComponent implements OnInit {
  carroForm!: FormGroup
  carro: Carro = {}
  carSubmit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: CarsService,
    private router: Router
  ) {

    this.carroForm = this.fb.group({
      placa: [''],
      chassi: [''],
      renavam: [''],
      modelo: [''],
      marca: [''],
      ano: ['']
    });

  }

  ngOnInit() {}

  cadastrarCarro(){
    if (this.carroForm.valid) {
    const novoCarro: Carro = {
      placa: this.carroForm.value.placa || '',
      chassi: this.carroForm.value.chassi || '',
      renavam: this.carroForm.value.renavam || '',
      modelo: this.carroForm.value.modelo || '',
      marca: this.carroForm.value.marca || '',
      ano: this.carroForm.value.ano || '',
    };

    this.service.cadastrarCarro(novoCarro).subscribe({
      next: () => {
        this.carSubmit = true
        setTimeout(() => {
          this.router.navigate(['/listar-carros']);
        }, 3000);
      },
      error: (err) => {
        console.error('Erro ao Cadastrar o Carro:', err);
      },
    });
    }
  }




}
