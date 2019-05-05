import { PagoComponent } from './pago/pago.component';
import { CuentasUsuarioComponent } from './cuentas-usuario/cuentas-usuario.component';
import { AgregarPagoComponent } from './agregar-pago/agregar-pago.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = 
[
  {
    path:'registro',
    component:RegistroComponent,
    data:{
      titulo:'Registro'
    }
  }
  ,
  {
    path:'',
    redirectTo:'/usuarios',
    pathMatch:'full'
  },
  {
    path:'usuarios',
    component:UsuariosComponent,
    data:{
      titulo:'Usuarios'
    }
  },
  {
    path:'registrar-pago/:token',
    component:AgregarPagoComponent,
    data:{
      titulo:'Registrar pago'
    }
  },
  {
    path:'cuentas/:token',
    component:CuentasUsuarioComponent,
    data:{
      titulo:'Cuentas de Usuario'
    }
  }
  ,
  {
    path:'pago',
    component:PagoComponent,
    data:{
      titulo:'Pago'
    }
  }
  
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
