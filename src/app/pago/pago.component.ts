import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import Swal from 'sweetalert2'
@Component({selector: 'app-pago', templateUrl: './pago.component.html', styleUrls: ['./pago.component.css']})
export class PagoComponent implements OnInit {
  addPagoForm : FormGroup;

  amount : number = 0;
  clientPaymentId : string = '';
  purpose : string = '';
  destinationToken : string = '';
  isLoadingResults = false;
  currency = 'USD'
  programToken : 'prg-869c0d7b-7038-40f0-9b18-90e6061419b8'
  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private router : Router, private api : ApiService, private dialogRef : MatDialogRef < PagoComponent >, @Inject(MAT_DIALOG_DATA)data) {
    this.destinationToken = data.token;
    console.log(data.token)
  }

  ngOnInit() {
    
    this.addPagoForm = this
      .formBuilder
      .group({
        'clientPaymentId': [
          null, Validators.required
        ],
        'amount': [
          null, Validators.required
        ],
        'purpose': [
          null, Validators.required
        ],
        'destinationToken': [this.destinationToken],

        'programToken': [
          'prg-869c0d7b-7038-40f0-9b18-90e6061419b8', Validators.required
        ],
        'currency': ['USD', Validators.required]
      });
  }
  onFormSubmit(form : NgForm) {
    //console.log(form)
    this.isLoadingResults = true;
    this
      .api
      .emitirPago(form)
      .subscribe(data => {

        this.isLoadingResults = false;
        if (data.cod ==0) {
        Swal.fire(data.data.errors[0].message) 
        } else {
          Swal.fire({position: 'top-end', type: 'success', title: 'Pago emitido con éxito', showConfirmButton: false, timer: 1500})
          this
            .router
            .navigate(['/usuarios']);
         
        }

      }, error => {
        console.log(error)

        this.isLoadingResults = false;
      });
  }
  onNoClick() : void {
    this
      .dialogRef
      .close();
  }

}
