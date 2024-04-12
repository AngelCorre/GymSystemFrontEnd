import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrl: './usuarios-lista.component.css'
})
export class UsuariosListaComponent implements OnInit{

  usuarios : any = [

  ];

  ngOnInit(): void {

    this.findUsuarios();

  }

  constructor(private usuarioService : UserService, private router:Router) { }

  findUsuarios() {

    this.usuarioService.findUsuarios().subscribe(data => {
      
      this.usuarios = data;

    });

  }

  deleteUsuario(id:number) {

    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar el usuario',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
    }).then((result) => {

      if (result.value) {

        this.usuarioService.deleteUsuario(id).subscribe(data => {

          swal(
            'Usuario Eliminado',
            'El usuario ha sido eliminado',
            'success'
          );

          this.findUsuarios();

        });
        
      }

    });

  }

  updateUsuario(id:number) {

    this.router.navigate(['usuarioActualizar', id]);

  }

  detailsUsuario(id:number) {

    this.router.navigate(['usuarioDetalles', id]);

  }

  saveUsuario() {

    this.router.navigate(['usuarioRegistrar'])

  }

}
