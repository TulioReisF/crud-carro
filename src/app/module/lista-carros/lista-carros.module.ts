import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarrosComponent } from './lista-carros.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';


const router = [
  {
    path: '',
    component: ListaCarrosComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule,
    NavbarModule
  ],
  declarations: [ListaCarrosComponent],

})
export class ListaCarrosModule { }
