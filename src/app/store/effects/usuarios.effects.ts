import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from "../actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";



@Injectable()
export class UsuariosEffects {

  constructor(private actions$: Actions, private usuarioService: UsuarioService) {}

  crearUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      exhaustMap( () => this.usuarioService.traerUsuarios().pipe(
        map( users => usuariosActions.cargarUsuariosSuccess({usuarios: users}) ),
        catchError(error => of(usuariosActions.cargarUsuariosError({payload: error}))),
      ))
    ),
  );

}
