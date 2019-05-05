import {RegistroComponent} from './registro/registro.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {AgregarPagoComponent} from './agregar-pago/agregar-pago.component';
import {CuentasUsuarioComponent} from './cuentas-usuario/cuentas-usuario.component';
import { PagoComponent } from './pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    UsuariosComponent,
    AgregarPagoComponent,
    CuentasUsuarioComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}