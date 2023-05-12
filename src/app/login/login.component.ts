import { Component } from '@angular/core';
import { DataBandaService } from '../services/data-banda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosUsuarioService } from '../services/datos-usuario.service';
import { Router } from '@angular/router';

interface User {

  id: string,
  correo: string,
  // añadir permiso tipo: string

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tigger: boolean = false;

  usuario: any;

  correo_login: string = '';
  pass_login: string = '';

  correo_registro: string = '';
  nombre_registro: string = '';
  pass_registro: string = '';
  pass_comprobar_registro: string = '';
  tipo: string = '';
  respuesta: any;

  constructor(private data: DataBandaService,
              private _snackBar: MatSnackBar,
              private dataUsurio: DatosUsuarioService, 
              private router: Router         
    ) {}

  cambio(){

    this.tigger = true;
  }

  submit(){

    this.data.insertarUsuario(this.correo_registro, this.pass_registro, "0").subscribe(data => {      
      this.respuesta = data;
      console.log(this.respuesta);
      if(this.respuesta.length > 0 && this.respuesta[0].respuesta == 'ok'){
        this.openSnackBar("Login realizado con éxito", "Ok");
      }else{
        // terminar
      }
      
    });
   // console.log(this.usuario);
   console.log(this.correo_registro, this.pass_registro);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, // duración del mensaje en milisegundos
    });
  }

  login(){
    
    this.data.inicioSesion(this.correo_login, this.pass_login).subscribe(result => {
      let datos: any = result
      console.log(result);
      if(datos.mensaje == 'ok'){

        let usuario: User = {
          id : datos.usuario.id,
          correo: datos.usuario.usuario
        }

        this.dataUsurio.setUsuario(usuario);

        this.router.navigate(["/"]);
      }
      
    })
  }

}
