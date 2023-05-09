import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
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
      title: 'Performance 1',
      band: 'band',
      date: '2023-05-01',
      location: 'Location 1',
    },
    {
      title: 'Performance 2',
      band: 'band',
      date: '2023-05-15',
      location: 'Location 2',
    },
    {
      title: 'Performance 3',
      band: 'band',
      date: '2023-05-30',
      location: 'Location 3',
    },
  ];

  constructor() { }

  /*
    this.slides[x] = {
      id: x,
      src: './assets/img/..',
      title: '',
      subtitle: ''
    };
  */

  ngOnInit(): void {
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
