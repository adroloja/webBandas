import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface User {

  id: string,
  correo: string,
  tipo: string

}

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor() {  }

  registrado: boolean = false;
  usuario = new BehaviorSubject<any>(null);
  user: User = {
    id: '',
    correo: '',
    tipo: ''
  }

  setUsuario(usuario: any){

    this.usuario.next(usuario);
    this.user = usuario;
    this.registrado = true;
  }

  getUsuario(){

    return this.usuario.asObservable();
  }
}
