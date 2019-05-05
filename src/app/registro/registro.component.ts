import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
import {first} from 'rxjs/operators';
import {ApiService} from '../api.service';
import {FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';
@Component({selector: 'app-registro', templateUrl: './registro.component.html', styleUrls: ['./registro.component.css']})
export class RegistroComponent implements OnInit {
  registerForm : FormGroup;
  firstName : string = '';
  lastName : string = '';
  email : string = '';
  dateOfBirth : Date;
  country : string = '';
  stateProvince : string = '';
  addressLine1 : string = '';
  city : string = '';
  postalCode : string = '';
  isLoadingResults = false;

  constructor(private formBuilder : FormBuilder, private router : Router, private api : ApiService) {}

  ngOnInit() {
    this.registerForm = this
      .formBuilder
      .group({
        'firstName': [
          null, Validators.required
        ],
        'lastName': [
          null, Validators.required
        ],
        'email': [
          null, Validators.required
        ],
        'dateOfBirth': [
          null, Validators.required

        ],
        'country': [
          null, Validators.required

        ],
        'stateProvince': [
          null, Validators.required

        ],
        'addressLine1': [
          null, Validators.required

        ],
        'city': [
          null, Validators.required

        ],
        'postalCode': [null, Validators.required]
      });
  }
  onFormSubmit(form : NgForm) {
    this.isLoadingResults = true;
    this
      .api
      .registrarUsuario(form)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data.mensaje == ' ') {
          this
            .router
            .navigate(['/registro']);

          Swal.fire(data.mensaje)
        } else {
          Swal.fire({position: 'top-end', type: 'success', title: 'Usuario registrado con éxito', showConfirmButton: false, timer: 1500})
          this
            .router
            .navigate(['/usuarios']);
          console.log(data);
        }

      }, error => {
        console.log(error)

        this.isLoadingResults = false;
      });
  }
}
