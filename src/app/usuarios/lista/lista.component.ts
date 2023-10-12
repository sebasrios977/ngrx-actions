import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit, OnDestroy{

  public usuarios: Usuarios[] = [];
  public loading: boolean = false;
  public error: any;

  private listaUnsubscribe!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.dispatch( cargarUsuarios() );
    this.listaUnsubscribe = this.store.select('usuarios').subscribe( ({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
  }

  ngOnDestroy(): void {
    this.listaUnsubscribe.unsubscribe();
  }



}
