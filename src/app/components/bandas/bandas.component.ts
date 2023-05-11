import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {
  bandaProfil = [
    {
      image: './assets/img/banner1.jpg',
      nombre: 'Band1',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!',
      nextPer: '12.05.2023',
      genre: '',
      fundada: '12.21.2421',
      facebook: '',
      instagram: '',
      youtube: '',
    },
    {
      image: './assets/img/banner1.jpg',
      nombre: 'Band1',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!',
      nextPer: '12.05.2023',
      genre: '',
      fundada: '12.21.2421',
      facebook: '',
      instagram: '',
      youtube: '',
    },
    {
      image: './assets/img/banner1.jpg',
      nombre: 'Band1',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!',
      nextPer: '12.05.2023',
      genre: '',
      fundada: '12.21.2421',
      facebook: '',
      instagram: '',
      youtube: '',
    },
  ];

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

  constructor(private fb: FormBuilder) { }

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

  onSubmit(): void {
    console.log(this.searchForm.value);
  }
}
