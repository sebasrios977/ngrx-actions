import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';

export interface UsuarioState {
  id: string | null,
  user: Usuarios | null,
  loaded: boolean,
  loading: boolean,
  error: any,
}

export const usuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export const usuarioReducer = createReducer(
  usuarioInitialState,
  on(cargarUsuario, (state, {id}) => ({
    ...state,
    loading: true,
    id: id,
    error: null,
  })),
  on(cargarUsuarioSuccess, (state, {usuario}) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...usuario},
  })),
  on(cargarUsuarioError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    user: null,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  })),
);
