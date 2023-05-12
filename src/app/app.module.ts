import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// coreui
import { CarouselModule, BreadcrumbModule, FormModule } from '@coreui/angular';

// forms
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { PerfilBandaComponent } from './perfil-banda/perfil-banda.component';
import { EditorBandaComponent } from './editor-banda/editor-banda.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BandasComponent,
    BlogComponent,
    ContactoComponent,
    LoginComponent,
    PerfilBandaComponent,
    EditorBandaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormModule,
    MatSnackBarModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
