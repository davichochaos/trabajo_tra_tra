import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Horario } from '../interfaces/horario.interface';
import 'rxjs/Rx';

@Injectable()
export class HorariosService {
  sailsUlr: string = 'http://port-1337.proyecto-davichochaos356130.codeanyapp.com/Horarios';

  constructor(private _http: Http) { }

  consultarHorarios() {
    return this._http.get(this.sailsUlr)
      .map(
        respuesta => {
          return respuesta.json();
        }
      );
  }

  editarHorario(horario: Horario, id: string) {
    const body = JSON.stringify(horario);
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

  eliminarHorario(key$: string) {
    let url = `${this.sailsUlr}/${key$}`;
    return this._http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  nuevoHorario(horario: Horario) {
    let body = JSON.stringify(horario);
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

  getHorario(indice: string) {
    let url = `${this.sailsUlr}/${ indice }`;
    return this._http.get(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

}
