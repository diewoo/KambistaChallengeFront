import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import uuidv1 from 'uuid/v1';
import dateFormat from 'dateformat';
//interface de usuario
import {IUsuario} from './Interfaces/Usuario.interface'
import {ITransferMethod} from './Interfaces/Transfer.interface'
import {IPayment} from './Interfaces/pago.interface'
import {Router} from '@angular/router';
//Headers

const apiUrl = 'https://kambistachallenge.herokuapp.com/users';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http : HttpClient, private router : Router) {}
  //método para registrar un usuario
  registrarUsuario(IUsuario) : Observable < IUsuario > {
    let usuario = IUsuario;
    usuario.profileType = 'INDIVIDUAL';
    usuario.clientUserId = uuidv1();
    usuario.firstName = IUsuario.firstName;
    usuario.lastName = IUsuario.lastName;
    usuario.email = IUsuario.email;
    usuario.dateOfBirth = dateFormat(IUsuario.dateOfBirth, "isoDate");;
    usuario.addressLine1 = IUsuario.addressLine1;
    usuario.city = IUsuario.city;
    usuario.country = IUsuario.country;
    usuario.stateProvince = IUsuario.stateProvince;
    usuario.postalCode = IUsuario.postalCode;
    usuario.programToken = 'prg-2109d76e-225c-4176-ab59-f7f94535a46a';
    usuario.mensaje = '';
    usuario.data = '';
    //console.log(usuario)
    return this.http.post < IUsuario > (apiUrl, usuario);
  }

  obtenerUsuarios() : Observable < IUsuario[] > {

    return this.http.get < IUsuario[] > (apiUrl)

  }

  registrarMetodoPago(ITransferMethod, usertoken : string) : Observable < ITransferMethod > {

    const url = `${apiUrl}/registrarpago/${usertoken}`;
    return this.http.post < ITransferMethod > (url, ITransferMethod);

  }

  listarCuentasBanco(usertoken : string) : Observable < any > {
    const url = `${apiUrl}/cuentas/${usertoken}`;
    return this
      .http
      .get(url)
  }
  emitirPago(IPayment) : Observable < IPayment > {
    const url = `${apiUrl}/pagar`;
    return this.http.post < IPayment > (url, IPayment)
  }
}
