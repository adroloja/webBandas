import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor-banda',
  templateUrl: './editor-banda.component.html',
  styleUrls: ['./editor-banda.component.css']
})
export class EditorBandaComponent {
  bandaForm!: FormGroup;
  provincias = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
    'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
    'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida',
    'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife',
    'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
  ];
  numComponentes = ['todas', 'más de 40', 'más de 60', 'más de 80', 'más de 100'];

  constructor(private fb: FormBuilder) {
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

  onSubmit(): void {
    if (this.bandaForm.valid) {
      const formData = this.bandaForm.value;
      console.log('Form Data: ', formData);
      // Aquí puedes enviar el formData a tu servidor backend
      // Su lógica de servicio HTTP va aquí
    }
  }
}
