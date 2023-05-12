import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilBandaComponent } from './components/perfil-banda/perfil-banda.component';
import { EditorBandaComponent } from './components/editor-banda/editor-banda.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  //! cambiar el tipo de dato "title" para cambiar el título de la pestaña
  { path: '', component: PrincipalComponent, data: { title: 'INICIO' } },
  { path: 'bandas', component: BandasComponent, data: { title: 'BANDAS' } },
  { path: 'blog', component: BlogComponent, data: { title: 'BLOG' } },
  { path: 'contacto', component: ContactoComponent, data: { title: 'CONTACTO' } },
  { path: 'login', component: LoginComponent, data: { title: 'LOGIN' } },
  //! Se trata de plantillas
  { path: 'templateBanda', component: PerfilBandaComponent, data: { title: 'Temp' } },
  { path: 'templateEditor', component: EditorBandaComponent, data: { title: 'Temp' } },
  { path: 'templateAdmin', component: AdminComponent, data: { title: 'Temp' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
