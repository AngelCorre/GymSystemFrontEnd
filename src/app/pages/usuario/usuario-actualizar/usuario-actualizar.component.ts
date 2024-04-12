import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrl: './usuario-actualizar.component.css'
})
export class UsuarioActualizarComponent implements OnInit{

  id : number;
  usuario : any;

  constructor(private userService : UserService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.userService.findUsuario(this.id).subscribe(data => {

      this.usuario = data;

    });

  }

  OnSubmit() {

    swal({

      title: '¿Estas seguro?',
      text: 'Confirma si deseas actualizar el usuario',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
    }).then((result) => {

      if (result.value) {

        this.userService.updateUsuario(this.id, this.usuario).subscribe((data) => {

          swal(
            'Usuario Actualizado',
            'El usuario ha sido actualizado',
            'success'
          );

          this.router.navigate(['usuariosLista']);

        }, (error) => {

          swal(
            'Error al actualizar',
            'Comuniquese con el administrador',
            'error'
          );

        });
        
      }

    });

  }

}
