import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataBandaService } from 'src/app/services/data-banda.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
 /*========================================================================================================================== 
    ==========================================================================================================================

                                                   Interfaces

   ==========================================================================================================================
   ==========================================================================================================================*/

interface BandaInfo {
  id_banda: number;
  nombre: string;
  info: string;
  estilo: string;
  provincia: string;
  login_id: number;
  login_usario: string;
}

interface link {
  id_link: number;
  link: string;
  id_login: number;
  usuario?: string;
}

@Component({
  selector: 'app-editor-banda',
  templateUrl: './editor-banda.component.html',
  styleUrls: ['./editor-banda.component.css']
})
export class EditorBandaComponent implements OnInit {

   /*========================================================================================================================== 
    ==========================================================================================================================

                                                    Variables

   ==========================================================================================================================
   ==========================================================================================================================*/

  banda: any = '';
  id_banda: string = '';
  z: string = '';
  enlace_facebook: string = '';
  enlace_instagram: string = '';
  enlace_youtube: string = '';
  estilo: string = '';
  provincia: string = '';
  nombre: string = '';
  info: string = '';
  vacio: boolean = true;
  id_youtube: number = 0;
  id_instagram: number = 0;
  id_facebook: number = 0;


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataBanda: DataBandaService,
    private datosUsuario: DatosUsuarioService) {
    this.bandaForm = this.fb.group({
      name: ['', Validators.required],
      province: ['', Validators.required],
      components: ['', Validators.required],
      desc: ['', Validators.required],
      actuationDate: [''],
      facebook: [''],
      instagram: [''],
      youtube: ['']
    });
  }
  ngOnInit() {
    // Esti trae los link que la banda tiene asociados
    this.dataBanda.getLinks(this.datosUsuario.user.id).subscribe(result => {
      console.log(result);
      let aux: any = result;
      let link_aux: link[] = aux;
      if(link_aux){
        this.vacio = false;
        console.log("Vacio: " + this.vacio);
      }

      link_aux.forEach((objeto: link) => {
        const primeraLetra = objeto.link.charAt(0);

        // Realiza la evaluación o comparación que desees
        if (primeraLetra == "y") {
          this.enlace_youtube = objeto.link;
          this.id_youtube = objeto.id_link;
        } else if (primeraLetra == "f") {
          this.enlace_facebook = objeto.link;
          this.id_facebook = objeto.id_link;
        } else {
          this.enlace_instagram = objeto.link;
          this.id_instagram = objeto.id_link;
        }
      });

    });

    //  Esto obtiene el id_login de la banda obtenido por la ruta y trae los datos de la BBDD
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.dataBanda.getBandaIdLogin(id).subscribe(result => {
      //console.log(result);
      let aux: any = result;
      this.estilo = aux.estilo;
      this.provincia = aux.provincia;
      this.nombre = aux.nombre;
      this.info = aux.info;
      this.id_banda = aux.id_banda;

      const bandaInfo = this.almacenarInformacionBanda(result);
      this.banda = bandaInfo;
    })


  }
   /*========================================================================================================================== 
    ==========================================================================================================================

                                      Funcion que almacena la información de la banda en la interface

   ==========================================================================================================================
   ==========================================================================================================================*/

  almacenarInformacionBanda(jsonData: any): BandaInfo {
    const bandaInfo: BandaInfo = {
      id_banda: jsonData.id_banda,
      nombre: jsonData.nombre,
      info: jsonData.info,
      estilo: jsonData.estilo,
      provincia: jsonData.provincia,
      login_id: jsonData.login_id,
      login_usario: jsonData.login_usario
    };

    return bandaInfo;
  }

   /*========================================================================================================================== 
    ==========================================================================================================================

                                     Funcion que guarda cambios realizados en el Html

   ==========================================================================================================================
   ==========================================================================================================================*/

  guardarCambios() {   

    if (this.enlace_instagram != '' && this.vacio) {

      this.dataBanda.insertarLink(this.banda.login_id, 'i' + this.enlace_instagram).subscribe(result => {
        console.log(result);
      });
    } else {
      this.dataBanda.modificarLink(this.id_instagram,'i' + this.enlace_instagram).subscribe(result => {
        console.log(result);
      });
    }

    if (this.enlace_youtube != '' && this.vacio) {

      this.dataBanda.insertarLink(this.banda.login_id, 'y' + this.enlace_youtube).subscribe(result => {
        console.log(result);
      });
    } else {
      this.dataBanda.modificarLink(this.id_youtube,'y' + this.enlace_youtube).subscribe(result => {
        console.log(result);
      });
    }

    if (this.enlace_facebook != '' && this.vacio) {

      this.dataBanda.insertarLink(this.banda.login_id, 'f' + this.enlace_facebook).subscribe(result => {
        console.log(result);
      });
    }else {
        this.dataBanda.modificarLink(this.id_facebook,'f' + this.enlace_facebook).subscribe(result => {
          console.log(result);
        });
      }
    

    this.dataBanda.modificarBanda(this.id_banda, this.nombre, this.info).subscribe(result => {

      console.log(result);
    })

  }
  // Funcion que al final no he utilizado
  onSubmit(): void {
    if (this.bandaForm.valid) {
      const formData = this.bandaForm.value;
      console.log('Form Data: ', formData);
  
    }
  }
  bandaForm!: FormGroup;
  provincias = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
    'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
    'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida',
    'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife',
    'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
  ];
  numComponentes = ['todas', 'más de 40', 'más de 60', 'más de 80', 'más de 100'];
}
