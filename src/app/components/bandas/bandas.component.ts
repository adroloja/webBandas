import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { DataBandaService } from 'src/app/services/data-banda.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

 /*========================================================================================================================== 
    ==========================================================================================================================

                                                  Interfaz de banda

   ==========================================================================================================================
   ==========================================================================================================================*/

interface Banda {

  image: string,
  nombre: string,
  descripcion: string,
  fundada: "01-01-2023",
  facebook: '',
  instagram: '',
  youtube: '',

}

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css'], 
})
export class BandasComponent implements OnInit {
   /*========================================================================================================================== 
    ==========================================================================================================================

                                                          Variables

   ==========================================================================================================================
   ==========================================================================================================================*/

  provinciaSeleccionada: string = '';
  fecha: Date | null | undefined;
  fechaFormateada: string = '';

  searchForm!: FormGroup;
  provinces = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
    'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
    'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida',
    'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife',
    'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
  ];
  numComponentes = ['todas', 'más de 40', 'más de 60',

    'más de 80', 'más de 100'];

  bandas: any = [];
  

  constructor(private fb: FormBuilder,
              private dataService: DataBandaService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      styles: this.fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),
      province: '',
      components: '',
      actuationDate: ''
    });
  }

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;


   /*========================================================================================================================== 
    ==========================================================================================================================

                                Funcion que almacena en una variable la fecha seleccionada y la parsea 

   ==========================================================================================================================
   ==========================================================================================================================*/

  onDateSelected(event: MatDatepickerInputEvent<Date, unknown>) {
 
    this.fecha = event.value;
    if (this.fecha) {
      //const fechaFormateada = this.fecha.toISOString().slice(0, 10);
      const fechaActual = new Date();
      fechaActual.setDate(this.fecha.getDate());
      this.fechaFormateada = fechaActual.toISOString().slice(0, 10);
      //console.log(fechaFormateada);

     /*  this.dataService.getBandasFecha(this.fechaFormateada).subscribe(resutl => {
        let aux: any = resutl;
        this.bandas = aux.bandas;
        //console.log(aux.bandas);
      }); */
      //
      //this.fecha_seleccionada = fechaFormateada;
      //let aux: any[] = this.listaActuaciones;
      // aux.forEach((objetoN) => {
      //   const fecha = objetoN.fecha;
      //   console.log('-- ' + fecha);
      //   if (fechaFormateada == fecha) {
       
      //     //console.log('Fecha igual');
      //   }
      // });
    }
  }
   /*========================================================================================================================== 
    ==========================================================================================================================

                                     Funcion que almacena en una variable la provincia seleccionada

   ==========================================================================================================================
   ==========================================================================================================================*/

  onProvinceSelectionChange(event: any){

    this.provinciaSeleccionada = event.value;
  }

   /*========================================================================================================================== 
    ==========================================================================================================================

                                      Funcion que trae de la BBDD la información de las bandas

   ==========================================================================================================================
   ==========================================================================================================================*/

  onSubmit(): void {

    if(this.provinciaSeleccionada == ''){
      this.dataService.getBandasFecha(this.fechaFormateada).subscribe(result => {
        let aux: any = result;
        this.bandas = aux.bandas;
      });
    }
    if(this.fechaFormateada == ''){

      this.getBandas();
    }  
    if(this.fechaFormateada != '' && this.provinciaSeleccionada != ''){

      this.dataService.getBandasProvinciaFecha(this.provinciaSeleccionada, this.fechaFormateada).subscribe(result => {

        let aux: any = result;
        this.bandas = aux.bandas;
      });
    }  


    // console.log(this.searchForm.value);
  }
  // Funcion que te trae todas las bandas
  getBandas(){  
    console.log(this.provinciaSeleccionada);
    this.dataService.getBandas(this.provinciaSeleccionada).subscribe(result => {
      console.log(result);
      this.bandas = result;
    }
    );

  }
}
