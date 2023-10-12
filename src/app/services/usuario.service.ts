import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaUsuarios, Usuarios } from '../interfaces/usuarios.interface';
import { Observable, map } from 'rxjs';
import { RespuestaUsuario, Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  traerUsuarios(): Observable<Usuarios[]> {
    const url = `${this.apiUrl}/users?per_page=6`;
    return this.http.get<RespuestaUsuarios>(url).pipe(
      map( ({data}) => data),
    )
  }
  traerUsuarioPorId(id: string): Observable<Usuario> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get<RespuestaUsuario>(url).pipe(
      map( ({data}) => data),
    )
  }

}
