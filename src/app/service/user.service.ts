import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  findUsuarios() {

    return this.httpClient.get(`${baseUrl}/users`);

  }

  findUsuario(id:number) {

    return this.httpClient.get(`${baseUrl}/user/${id}`);

  }

  saveUsuario(usuario:any) {

    return this.httpClient.post(`${baseUrl}/user`, usuario);

  }

  updateUsuario(id:number, usuario:any) {

    return this.httpClient.put(`${baseUrl}/user/${id}`, usuario);

  }

  deleteUsuario(id:number) {

    return this.httpClient.delete(`${baseUrl}/user/${id}`);

  }

}
