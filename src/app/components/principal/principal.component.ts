import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataBandaService } from 'src/app/services/data-banda.service';


interface Actuaciones {
    login_id: string;
    fecha: string;
    provincia: string;
    nombre: string;

}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  actuaciones: any;
  actuacionesBandas: Actuaciones[] = [];

   /*========================================================================================================================== 
    ==========================================================================================================================

                                     Cabecera de actuaciones y demás del inicio

   ==========================================================================================================================
   ==========================================================================================================================*/

  // Para añadir más banners, edita el número en el "Array(x)".
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  circularImages = [
    {
      image: './assets/img/icon1.png',
      text: 'Bandas de música',
    },
    {
      image: './assets/img/icon2.png',
      text: 'Agrupaciones musicales',
    },
    {
      image: './assets/img/icon3.png',
      text: 'Bandas de Cornetas y Tambores',
    },
  ];

  upcomingPerformances = [
    {
      title: 'actuaciones 1',
      band: 'band',
      date: '2023-05-01',
      location: 'Location 1',
    },
    {
      title: 'actuaciones 2',
      band: 'band',
      date: '2023-05-15',
      location: 'Location 2',
    },
    {
      title: 'actuaciones 3',
      band: 'band',
      date: '2023-05-30',
      location: 'Location 3',
    },
  ];

  constructor(private data: DataBandaService) { }

  /*
    this.slides[x] = {
      id: x,
      src: './assets/img/..',
      title: '',
      subtitle: ''
    };
  */

  ngOnInit(): void {
    // Codigo que muestra la proximas actuaciones
    this.data.getActuaciones().subscribe(result => {
      //console.log(result);
      this.actuaciones = result;
      let aux: any[] = this.actuaciones;
      //this.actuaciones = [];
        aux.forEach(n => {
      //console.log(n.login_id);
      this.data.getBandaId(n.login_id).subscribe(result => {
        //console.log(result);
        let temp: any = result;
        console.log(temp[0].nombre);
        // console.log("aux2");
        // console.log(aux2);
       let banda: Actuaciones = {
          login_id: n.login_id,
          nombre: temp[0].nombre,
          fecha: n.fecha,
          provincia: temp[0].provincia
        }
        console.log(banda)
        this.actuacionesBandas.push(banda); 
      });

    });
    //console.log(this.actuacionesBandas);
    })


    this.slides[0] = {
      id: 0,
      src: './assets/img/banner1.jpg',
      title: 'Bandas de Cornetas y Tambores',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/banner2.jpeg',
      title: 'Agrupaciones musicales',
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/banner3.jpg',
      title: 'Bandas de música',
    }
  }
}
