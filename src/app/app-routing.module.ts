import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListaComponent } from './pages/usuario/usuarios-lista/usuarios-lista.component';
import { UsuarioActualizarComponent } from './pages/usuario/usuario-actualizar/usuario-actualizar.component';
import { UsuarioRegistrarComponent } from './pages/usuario/usuario-registrar/usuario-registrar.component';
import { UsuarioDetallesComponent } from './pages/usuario/usuario-detalles/usuario-detalles.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioLoginComponent } from './pages/usuario/usuario-login/usuario-login.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'usuariosLista', component:UsuariosListaComponent},
{path:'usuarioActualizar/:id', component:UsuarioActualizarComponent},
{path:'usuarioRegistrar', component:UsuarioRegistrarComponent},
{path:'usuarioDetalles/:id', component:UsuarioDetallesComponent},
{path:'usuarioLogin', component:UsuarioLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
