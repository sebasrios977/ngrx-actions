import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit{

  public usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.traerUsuarios()
    .subscribe( (usuarios) => {
      this.usuarios = usuarios;
    })
  }
}
