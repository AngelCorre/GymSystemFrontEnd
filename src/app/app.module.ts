import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioActualizarComponent } from './pages/usuario/usuario-actualizar/usuario-actualizar.component';
import { UsuarioDetallesComponent } from './pages/usuario/usuario-detalles/usuario-detalles.component';
import { UsuarioRegistrarComponent } from './pages/usuario/usuario-registrar/usuario-registrar.component';
import { UsuariosListaComponent } from './pages/usuario/usuarios-lista/usuarios-lista.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { UsuarioLoginComponent } from './pages/usuario/usuario-login/usuario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioActualizarComponent,
    UsuarioDetallesComponent,
    UsuarioRegistrarComponent,
    UsuariosListaComponent,
    NavbarComponent,
    HomeComponent,
    UsuarioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
