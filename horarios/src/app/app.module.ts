import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MessagesModule} from 'primeng/primeng';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {UserService} from './services/usuario.services';
import {HorariosService} from './services/horarios.service';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/share/login/login.component';
import { AdministradorComponent } from './components/share/admin/administrador/administrador.component';
import { NavbarComponent } from './components/share/users/navbar/navbar.component';
import { PerfilComponent } from './components/share/users/perfil/perfil.component';
import { PrestamoComponent } from './components/share/users/prestamo/prestamo.component';
import { HorariosComponent } from './components/share/users/horarios/horarios.component';
import { NavbarAdmiComponent } from './components/share/admin/navbar-admi/navbar-admi.component';
import { UsuariosComponent } from './components/share/admin/usuarios/usuarios.component';
import { HorariosAdmiComponent } from './components/share/admin/horarios-admi/horarios-admi.component';
import { UsuarioComponent } from './components/share/admin/usuario/usuario.component';
import { HorarioComponent } from './components/share/admin/horario/horario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    NavbarComponent,
    PerfilComponent,
    PrestamoComponent,
    HorariosComponent,
    NavbarAdmiComponent,
    UsuariosComponent,
    HorariosAdmiComponent,
    UsuarioComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule,
    MessagesModule
  ],
  providers: [
    UserService,
    HorariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
