import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../../interfaces/user.interface';
import {UserService} from '../../../../services/usuario.services';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  id: string;
  usuario: Usuario = {
    nombre: "",
    cargo: "",
    contra: "",
    contra1: "",
    usuario: "",
  }

  constructor(private _usuarioServices: UserService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params
      .subscribe(
        parametros => {
          this.id = parametros['id'];

          if (this.id !== 'nuevo') {
            this._usuarioServices.getUsuario(this.id)
              .subscribe(
                resultado => {
                  this.usuario = resultado;
                }
              );
          }
        }
      );
  }

  ngOnInit() {
    console.log("registro ngOnInit");
    this._usuarioServices.isLogged().then((result: boolean) => {
      if (!result) {
        this._router.navigate(['/login']);
      }
    });
  }

  guardar() {
    if (this.id == 'nuevo') {
      // guardar pokemon nuevo
      this._usuarioServices.nuevoUsuario(this.usuario).subscribe(
        resultado => {
          console.log(resultado.name);
          this._router.navigate(['/usuarios']);
        }
      );
    } else {
      this._usuarioServices.editarUsuario(this.usuario, this.id).subscribe(
        resultado => {
          this._router.navigate(['/usuarios' ]);
        }
      );
    }
  }

}
