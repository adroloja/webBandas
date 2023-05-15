import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataBandaService } from 'src/app/services/data-banda.service';

interface BandaInfo {
  id_banda: number;
  nombre: string;
  info: string;
  estilo: string;
  provincia: string;
  login_id: number;
  login_usario: string;
}

@Component({
  selector: 'app-editor-banda',
  templateUrl: './editor-banda.component.html',
  styleUrls: ['./editor-banda.component.css']
})
export class EditorBandaComponent implements OnInit {

  banda: any = '';
  enlace_facebook: string = '';
  enlace_instagram: string = '';
  enlace_youtube: string = '';

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private dataBanda: DataBandaService) {
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
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id') ?? '';  
    this.dataBanda.getBandaIdLogin(id).subscribe(result => {
      console.log(result);
      const bandaInfo = this.almacenarInformacionBanda(result);
      this.banda = bandaInfo;
    })
  
  
  }

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
  

  guardarCambios(){   // por aqui me quede

    
  }

  onSubmit(): void {
    if (this.bandaForm.valid) {
      const formData = this.bandaForm.value;
      console.log('Form Data: ', formData);
      // Aquí puedes enviar el formData a tu servidor backend
      // Su lógica de servicio HTTP va aquí
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
