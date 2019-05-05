import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {ApiService} from '../api.service';
import Swal from 'sweetalert2'
//import { ConsoleReporter } from 'jasmine';
@Component({selector: 'app-agregar-pago', templateUrl: './agregar-pago.component.html', styleUrls: ['./agregar-pago.component.css']})
export class AgregarPagoComponent implements OnInit {

  addPayForm : FormGroup;
  branchId : string = '';
  bankAccountPurpose : string = '';
  bankAccountId : string = '';

  isLoadingResults = false;
  constructor(private formBuilder : FormBuilder, private router : Router, private api : ApiService, private route : ActivatedRoute) {}

  ngOnInit() {

    this.addPayForm = this
      .formBuilder
      .group({
        'branchId': [
          null, Validators.required
        ],
        'bankAccountId': [
          null, Validators.required
        ],
        'bankAccountPurpose': [null, Validators.required]
      });
  }

  onFormSubmit(form : NgForm) {
    this.isLoadingResults = true;

    const token2 = this.route.snapshot.params['token'];
    console.log(token2)
    this
      .api
      .registrarMetodoPago(form, token2)
      .subscribe(data => {
        console.log(data)
        if (data.mensaje == ' ') {
          this
            .router
            .navigate(['/registrar-pago', token2]);

          Swal.fire(data.mensaje)
        } else {
          Swal.fire({position: 'top-end', type: 'success', title: 'Método de pago agregado con éxito', showConfirmButton: false, timer: 1500})
          this
            .router
            .navigate(['/usuarios']);
          console.log(data);
        }

        this.isLoadingResults = false;

      }, error => {

        console.log(error)
        this.isLoadingResults = false;
      });
  }

}
