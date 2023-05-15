import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataBandaService } from 'src/app/services/data-banda.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

interface User {

  id: string,
  correo: string,
  tipo: string

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tigger: boolean = false;

  usuario: any;
  tipo: string = '';

  correo_login: string = '';
  pass_login: string = '';

  correo_registro: string = '';
  nombre_registro: string = '';
  pass_registro: string = '';
  tipo_registro: string = '';
  pass_comprobar_registro: string = '';

  nombre_banda = '';
  estilo_banda = '';
  provincia_banda = '';
  
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

    this.data.insertarUsuario(this.correo_registro, this.pass_registro, this.tipo_registro).subscribe(data => {      
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
          correo: datos.usuario.usuario,
          tipo: datos.usuario.tipo
        }

        this.dataUsurio.setUsuario(usuario);

        this.router.navigate(["/"]);
      }
      
    })
  }

  onProvinceSelectionChange(event: any){

    this.provincia_banda = event.value;
    //console.log(this.provincia_banda);
  }

  provinces = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
    'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
    'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida',
    'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife',
    'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
  ];
}
