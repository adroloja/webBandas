import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DataBandaService } from 'src/app/services/data-banda.service';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-perfil-banda',
  templateUrl: './perfil-banda.component.html',
  styleUrls: ['./perfil-banda.component.css']
})
export class PerfilBandaComponent implements OnInit {

  banda: any;
  listaActuaciones: any;
  fecha: Date | null | undefined;
  fechaOcupada: boolean = false;
  login_id: string = '';
  id_banda: string = '';
  fecha_seleccionada: string = '';
  respuesta_insertar_fecha: any;
  contacto_banda = false;
  login_usuario = '';


  constructor(private data: DataBandaService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public datosUsuario: DatosUsuarioService) { }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id') ?? '';

    //console.log("id: " + id);
    this.id_banda = id;
    if (id !== '') {
      this.data.getBandaId(id).subscribe(result => {

        const banda_: any = result;
        this.banda = banda_[0];
        console.log(this.banda);
        this.login_id = this.banda.login_id;
        this.login_usuario = this.banda.login_usuario;
        console.log('usuario: ' + this.login_usuario);
      });
    }

    this.data.getActuacionId(id).subscribe(result => {

      //console.log(result);
      this.listaActuaciones = result;
    });
  }

  onDateSelected(event: MatDatepickerInputEvent<Date, unknown>) {

    this.fechaOcupada = false;
    this.fecha = event.value;
    if (this.fecha) {
      //const fechaFormateada = this.fecha.toISOString().slice(0, 10);
      const fechaActual = new Date();
      fechaActual.setDate(this.fecha.getDate());
      const fechaFormateada = fechaActual.toISOString().slice(0, 10);
      //console.log(fechaFormateada);
      this.fecha_seleccionada = fechaFormateada;
      let aux: any[] = this.listaActuaciones;
      aux.forEach((objetoN) => {
        const fecha = objetoN.fecha;
        console.log('-- ' + fecha);
        if (fechaFormateada == fecha) {
          this.fechaOcupada = true;
          //console.log('Fecha igual');
        }
      });
    }
  }

  reservarFecha() {

    if (this.login_id == this.datosUsuario.user.id || this.datosUsuario.user.tipo == '0') {
      if (this.fecha_seleccionada != '') {

        this.data.insertarActuaciones(this.id_banda, this.fecha_seleccionada, this.login_id).subscribe(result => {
          this.respuesta_insertar_fecha = result
          if (this.respuesta_insertar_fecha.respuesta == 'ok') {

            this.openSnackBar("Reserva realizada con éxito", "Ok");
            this.data.getActuacionId(this.id_banda).subscribe(result => {

              console.log(result);
              this.listaActuaciones = result;
              this.fechaOcupada = true;
            });
          }
          //window.location.reload();
        });

      }
    }
  }

  eliminarFecha() {

    if (this.login_id == this.datosUsuario.user.id || this.datosUsuario.user.tipo == '0') {
      let aux: any[] = this.listaActuaciones;
      aux.forEach((objetoN) => {
        const fecha = objetoN.fecha;
        const id_act = objetoN.id_actuaciones;
        if (this.fecha_seleccionada == fecha) {
          this.data.eliminarActuaciones(id_act).subscribe(result => {
            let aux: any = result;
            if (aux.respuesta == 'ok') {
              this.openSnackBar("Reserva eliminada con éxito", "Ok");
              this.data.getActuacionId(this.id_banda).subscribe(result => {

                console.log(result);
                this.listaActuaciones = result;
                this.fechaOcupada = false;
              });
            }
          });
        }
      });
    }
  }

  contactoBanda(){

    this.contacto_banda = true;
  }

  cerrarContactoBanda(){

    this.contacto_banda = false;
  }


  bandaProfile = [
    {
      img: './assets/img/banner1.jpg',
      name: 'Test!',
      province: 'Ademas',
      componentesNum: '60',
      video1: './assets/img/banner1.jpg',
      video2: './assets/img/banner1.jpg',
      video3: './assets/img/banner1.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta distinctio fugit ipsam culpa, dolorum ab animi explicabo iusto repellendus voluptatem similique eveniet omnis voluptas aperiam? Ab deleniti perspiciatis et temporibus commodi unde nisi quam ipsum quaerat fugiat, ut velit nihil assumenda excepturi illo ipsa numquam similique maxime soluta. Quod aspernatur, consectetur odio aperiam nobis harum dolor, nulla exercitationem quo fuga maiores eaque, distinctio corporis? Iste aut consequatur maxime quis voluptatem, nihil dolorem, sint aliquam praesentium provident error, natus reiciendis culpa odit porro repellat. Illo aspernatur unde nihil eum soluta, quos necessitatibus illum saepe praesentium iusto vel doloribus dolore sunt?',
    }
  ]

  blockedDates: Date[] = [
    new Date('2023-05-06'),
    // Add more dates as needed
  ];

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const blocked = this.blockedDates.some(blockedDate =>
      blockedDate.getDate() === date.getDate() &&
      blockedDate.getMonth() === date.getMonth() &&
      blockedDate.getFullYear() === date.getFullYear()
    );

    return blocked ? 'blocked-date' : '';
  };

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500, // duración del mensaje en milisegundos
    });
  }
}
