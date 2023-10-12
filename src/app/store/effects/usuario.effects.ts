import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from "../actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";



@Injectable()
export class UsuarioEffects {

  constructor(private actions$: Actions, private usuarioService: UsuarioService) {}

  crearUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      exhaustMap( (action) => this.usuarioService.traerUsuarioPorId(action.id).pipe(
        map( user => usuariosActions.cargarUsuarioSuccess({usuario: user}) ),
        catchError(error => of(usuariosActions.cargarUsuarioError({payload: error}))),
      ))
    ),
  );

}
