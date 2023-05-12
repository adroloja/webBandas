import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface User {

  id: string,
  correo: string,
  // añadir permiso tipo: string

}

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor() {  }

  usuario = new BehaviorSubject<any>(null);
  user: User = {
    id: '',
    correo: ''
  }

  setUsuario(usuario: any){

    this.usuario.next(usuario);
    this.user = usuario;
  }

  getUsuario(){

    this.usuario.asObservable();
  }
}
