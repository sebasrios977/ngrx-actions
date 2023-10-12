import { createAction, props } from '@ngrx/store';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';

export const cargarUsuario = createAction(
  '[Usuarios] Cargar Usuario',
  props<{id: string}>(),
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuario Success',
  props<{usuario: Usuarios}>(),
);
export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuario Error',
  props<{payload: any}>(),
);
