import { Component, OnInit } from '@angular/core';
import {Horario} from '../../../../interfaces/horario.interface';
import {HorariosService} from '../../../../services/horarios.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styles: []
})
export class HorarioComponent implements OnInit {

  id: string;

  horario: Horario = {
    cosa: "",
    dia: "",
    hora: "",
    carrera: "",
    codigo: "",
    materia: "",
    nivel: 0,
    grupo: "",
  }

  constructor(private _horarioServices: HorariosService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params
      .subscribe(
        parametros => {
          this.id = parametros['id'];

          if (this.id !== 'nuevo') {
            this._horarioServices.getHorario(this.id)
              .subscribe(
                resultado => {
                  this.horario = resultado;
                }
              );
          }
        }
      );
  }

  ngOnInit() {
  }

  guardar() {
    if (this.id == 'nuevo') {
      // guardar pokemon nuevo
      this._horarioServices.nuevoHorario(this.horario).subscribe(
        resultado => {
          console.log(resultado.name);
          this._router.navigate(['/horariosadmin']);
        }
      );
    } else {
      this._horarioServices.editarHorario(this.horario, this.id).subscribe(
        resultado => {
          this._router.navigate(['/horariosadmin' ]);
        }
      );
    }
  }

}
