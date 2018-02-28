import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/share/login/login.component';
import {AdministradorComponent} from './components/share/admin/administrador/administrador.component';
import {PerfilComponent} from './components/share/users/perfil/perfil.component';
import {PrestamoComponent} from './components/share/users/prestamo/prestamo.component';
import {HorariosComponent} from './components/share/users/horarios/horarios.component';
import {UsuariosComponent} from './components/share/admin/usuarios/usuarios.component';
import {UsuarioComponent} from './components/share/admin/usuario/usuario.component';
import {HorariosAdmiComponent} from './components/share/admin/horarios-admi/horarios-admi.component';
import {HorarioComponent} from './components/share/admin/horario/horario.component';


const APP_ROUTES: Routes = [
  {path: 'inicio', component: LoginComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'prestamo', component: PrestamoComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'horariosadmin', component: HorariosAdmiComponent},
  {path: 'horarioadmin/:id', component: HorarioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
