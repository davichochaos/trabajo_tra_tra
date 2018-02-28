import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Usuario} from '../../../interfaces/user.interface';
import {UserService} from '../../../services/usuario.services';
import {MessagesModule} from 'primeng/primeng';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  msgs: any[] = [];
  returnUrl: string;
  usuarios: Usuario = {

    nombre: "",
    cargo: "",
    contra: "",
    contra1: "",
    usuario: ""
  }
  listaUsuarios: Usuario[] = [];

  constructor(private _router: Router, private _usuarioServices: UserService) {
  }

  ngOnInit() {
    this._usuarioServices.isLogged().then((result: boolean) => {
      if (result) {
        this._router.navigate(['/usuarios']);
      }
    });
  }

  login(usuario, contra) {
    console.log("user:" + usuario);
    console.log("password:" + contra);
    this._usuarioServices.consultarUsuarios().subscribe(
      respuesta => {
        for (let key$ in respuesta) {
          const usuarioNew = respuesta[key$];
          usuarioNew.id = respuesta[key$].id;
          this.listaUsuarios.push(usuarioNew);
          if (usuarioNew.usuario === usuario && usuarioNew.contra === contra && (usuarioNew.cargo === "Administrador" || usuarioNew.cargo === "administrador")) {
            if (typeof(Storage) !== 'undefined') {
              sessionStorage.setItem('Administrador', this.usuarios.usuario);
            }

            console.log("Usuario correcto");
            console.log(this.usuarios);
            console.log(usuarioNew);
            this._router.navigate(['/usuarios']);
          } else
            if (usuarioNew.usuario === usuario && usuarioNew.contra === contra && (usuarioNew.cargo === "Docente" || usuarioNew.cargo === "docente")) {
              if (typeof(Storage) !== 'undefined') {
                sessionStorage.setItem('Usuarios', this.usuarios.usuario);
              }
              console.log("Usuario correcto");
              console.log(usuarioNew);
              this._router.navigate(['/perfil']);
          } else {
            console.log("Usuario incorrecto");
              console.log(this.usuarios);
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'ERROR DE AUTENTICACIÓN: ',
              detail: 'Por favor ingrese correctamente su email y contraseña'
            });
          }

        }
        //console.log(this.listaUsuario);
        return this.listaUsuarios;
      });
  }
}
