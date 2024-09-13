import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCarroComponent } from './cadastro-carro.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

const router = [
  {
    path: '',
    component: CadastroCarroComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    NavbarModule
  ],
  declarations: [CadastroCarroComponent]
})
export class CadastroCarroModule { }
