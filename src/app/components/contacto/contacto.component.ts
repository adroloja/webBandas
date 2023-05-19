import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
 /*========================================================================================================================== 
    ==========================================================================================================================

                                     Variables

   ==========================================================================================================================
   ==========================================================================================================================*/

  nombre: string = '';
  email: string = '';
  asunto: string = '';
  mensaje: string = '';

   /*========================================================================================================================== 
    ==========================================================================================================================

                                                     Formulario

   ==========================================================================================================================
   ==========================================================================================================================*/

  form: any = {

      nombre: this.nombre,
      email: this.email,
      asunto: this.asunto,
      mensaje: this.mensaje
    }
 
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void { }



   /*========================================================================================================================== 
    ==========================================================================================================================

                                      Funcion que manda mensaje en contacto

   ==========================================================================================================================
   ==========================================================================================================================*/

  sendEmail() {
    emailjs.sendForm('service_gnu8gmq', 'template_yt8ntlh', 'form', 'jS0PnyI4a3mIQzo6C')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Mensaje enviado con éxito.");
      }, (error) => {
        console.log(error.text);
      });
  }
}