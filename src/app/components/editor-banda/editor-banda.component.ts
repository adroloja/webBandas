import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor-banda',
  templateUrl: './editor-banda.component.html',
  styleUrls: ['./editor-banda.component.css']
})
export class EditorBandaComponent {
  bandaForm!: FormGroup;
  numComponentes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private fb: FormBuilder) {
    this.bandaForm = this.fb.group({
      img: [''],
      name: ['', Validators.required],
      province: ['', Validators.required],
      components: ['', Validators.required],
      actuationDate: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bandaForm.valid) {
      const formData = this.bandaForm.value;
      console.log('Form Data: ', formData);
      // Here you can send the formData to your backend server
      // Your HTTP service logic goes here
    }
  }
}
