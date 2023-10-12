import { createAction, props } from '@ngrx/store';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{usuarios: Usuarios[]}>(),
);
export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{payload: any}>(),
);
