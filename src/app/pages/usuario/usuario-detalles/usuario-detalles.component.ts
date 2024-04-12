import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrl: './usuario-detalles.component.css'
})
export class UsuarioDetallesComponent implements OnInit{

  id : number = 0;

  usuario : any;

  constructor(private userService : UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.userService.findUsuario(this.id).subscribe(data => {

      this.usuario = data;

    });


  }

}
