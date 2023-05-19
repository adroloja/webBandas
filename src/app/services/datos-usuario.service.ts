import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

 /*========================================================================================================================== 
    ==========================================================================================================================

                               Interfaz de usuario que usa la aplicación para verificar los datos

   ==========================================================================================================================
   ==========================================================================================================================*/

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
  // Funcion que guarda el usuario a traver de un BehaviorSubject (parecido a un Observable)
  setUsuario(usuario: any){

    this.usuario.next(usuario);
    this.user = usuario;
    this.registrado = true;
  }

  // Funcion que lo devuelve
  getUsuario(){

    return this.usuario.asObservable();
  }
}
