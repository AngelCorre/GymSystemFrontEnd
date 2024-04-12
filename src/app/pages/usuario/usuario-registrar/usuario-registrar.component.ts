import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrl: './usuario-registrar.component.css'
})
export class UsuarioRegistrarComponent {

  usuario = {

    name : "",
    email: "",
    password: "",
    benchPress: "",
    squat: "",
    deadlift: ""

  };

  constructor(private userService : UserService, private router : Router) { }

  OnSubmit() {

    this.userService.saveUsuario(this.usuario).subscribe( data => {

      this.usuario = {

        name : "",
        email: "",
        password: "",
        benchPress: "",
        squat: "",
        deadlift: ""
    
      };

      this.router.navigate(['usuariosLista']);

    });

  }

}
