import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { Usuarios } from 'src/app/interfaces/usuarios.interface';

export interface UsuariosState {
  users: Usuarios[],
  loaded: boolean,
  loading: boolean,
  error: any,
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(cargarUsuarios, (state) => ({...state, loading: true})),
  on(cargarUsuariosSuccess, (state, {usuarios}) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })),
  on(cargarUsuariosError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    users: [],
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  })),
);
