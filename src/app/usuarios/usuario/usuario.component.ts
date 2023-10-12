import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import * as usuarioActions from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public user: Usuario | null = null;
  public loading: boolean = false;
  public error: any;


  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.select('usuario').subscribe( ({user, error, loading}) => {
      this.user = user;
      this.error = error;
      this.loading = loading;
    })

    this.router.params.subscribe( ({id}) => {
      this.store.dispatch( usuarioActions.cargarUsuario({id: id}) );
    })
  }
}
