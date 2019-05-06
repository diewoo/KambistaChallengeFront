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
          null, Validators.required,Validators.maxLength(10)
        ],
        'lastName': [
          null, Validators.required,Validators.maxLength(10)
        ],
        'email': [
          null, Validators.required,Validators.email
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
  /*
  public noWhitespaceValidator(control: FormControl): { whitespace: boolean } {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }*/
  onFormSubmit(form : NgForm) {

    this.isLoadingResults = true;
    this
      .api
      .registrarUsuario(form)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data.cod == 1) {
          
          Swal.fire({type: 'success', title: 'Usuario registrado con éxito', showConfirmButton: false, timer: 1500})
          this
            .router
            .navigate(['/usuarios']);
          //console.log(data);
        } else {
          this
            .router
            .navigate(['/registro']);
          //console.log(data)
          Swal.fire(data.data.errors[0].message) 
        }

      }, error => {
        console.log(error)

        this.isLoadingResults = false;
      });
  }
}
