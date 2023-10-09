import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { ListaComponent } from './usuarios/lista/lista.component';

const routes: Routes = [
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
  },
  {
    path: 'home',
    component: ListaComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
