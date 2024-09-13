import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./module/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cadastro-carro',
    loadChildren: () =>
      import('./module/cadastro-carro/cadastro-carro.module').then((m) => m.CadastroCarroModule),
  },
  {
    path: 'listar-carros',
    loadChildren: () =>
      import('./module/lista-carros/lista-carros.module').then((m) => m.ListaCarrosModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
