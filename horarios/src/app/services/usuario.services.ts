import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/user.interface';
import 'rxjs/Rx';

@Injectable()

export class UserService {

  sailsUlr: string = 'http://port-1337.proyecto-davichochaos356130.codeanyapp.com/Usuarios';
    constructor(private _http: Http) {

  }

  isLogged(): Promise<boolean> {
    if (typeof(Storage) !== 'undefined') {
      if (sessionStorage.getItem('Usuario')) {
        return Promise.resolve(true);
      }
    }
    return Promise.resolve(false);
  }

  consultarUsuarios() {
    return this._http.get(this.sailsUlr)
      .map(
        respuesta => {
          return respuesta.json();
        }
      );
  }

  editarUsuario(usuario: Usuario, id: string) {
    const body = JSON.stringify(usuario);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.sailsUlr}/${id }`;
    return this._http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarUsuario(key$: string) {
    let url = `${this.sailsUlr}/${key$}`;
    return this._http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  nuevoUsuario(usuario: Usuario) {
      let body = JSON.stringify(usuario);
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this._http.post(this.sailsUlr, body, {headers: headers} )
        .map(
        resultado => {
          return resultado.json();
      }
    );
  }

  getUsuario(indice: string) {
    let url = `${this.sailsUlr}/${ indice }`;
    return this._http.get(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

}
