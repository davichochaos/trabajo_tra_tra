import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/usuario.services';
import { Usuario } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private _usuarioService: UserService) {
    this._usuarioService.consultarUsuarios()
      .subscribe(
      resultados => {
        for (let key$ in resultados){
          let usuarioNew = resultados[key$];
          usuarioNew.id = resultados[key$].id;
          this.usuarios.push(usuarioNew);
        }
        return this.usuarios;
      }
    );
  }

  ngOnInit() {
  }

  eliminar(id: string, posicion: number) {
    this._usuarioService.eliminarUsuario(id)
      .subscribe(
        resultados => {
          this.usuarios.splice(posicion, 1);
        }
      );
  }

}
