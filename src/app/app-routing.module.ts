import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { CocheComponent } from './coche/coche.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';

const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'coche', component: CocheComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumnado-daw', component: AlumnadoDAWComponent},
  {path: 'coche/:id', component: CocheComponent},
  {path: 'alumnado-daw/:curso', component: AlumnadoDAWComponent},

  {path: '', component: EmpleadoComponent},
  {path: '**', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
