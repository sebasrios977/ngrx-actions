import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaUsuarios, Usuarios } from '../interfaces/usuario.interface';
import { Observable, map, tap } from 'rxjs';

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
}
