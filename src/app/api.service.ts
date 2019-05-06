import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import uuidv1 from 'uuid/v1';
import dateFormat from 'dateformat';
//interface de usuario
import {IUsuario} from './Interfaces/Usuario.interface'
import {ITransferMethod} from './Interfaces/Transfer.interface'
import {IPayment} from './Interfaces/pago.interface'
import {Router} from '@angular/router';
//Headers

//const apiUrl = 'https://kambistachallenge.herokuapp.com/users';
const apiUrl = 'http://localhost:3000/users';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http : HttpClient, private router : Router) {}
  //método para registrar un usuario
  registrarUsuario(IUsuario) : Observable < any > {
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
    usuario.programToken = 'prg-869c0d7b-7038-40f0-9b18-90e6061419b8';
    //usuario.mensaje = '';
    //usuario.data = '';
    console.log(usuario)
    return this.http.post < IUsuario > (apiUrl, usuario);
  }

  obtenerUsuarios() : Observable < IUsuario[] > {
    
    return this.http.get < IUsuario[] > (apiUrl)

  }
   

  registrarMetodoPago(ITransferMethod, usertoken : string) : Observable < any > {

    const url = `${apiUrl}/registrarpago/${usertoken}`;
    return this.http.post < ITransferMethod > (url, ITransferMethod);

  }

  listarCuentasBanco(usertoken : string) : Observable < any > {
    const url = `${apiUrl}/cuentas/${usertoken}`;
    return this
      .http
      .get(url)
  }
  emitirPago(IPayment) : Observable < any > {
    const url = `${apiUrl}/pagar`;
    return this.http.post < IPayment > (url, IPayment)
  }
}
