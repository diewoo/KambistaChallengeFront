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
  programToken : 'prg-2109d76e-225c-4176-ab59-f7f94535a46a'
  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private router : Router, private api : ApiService, private dialogRef : MatDialogRef < PagoComponent >, @Inject(MAT_DIALOG_DATA)data) {
    this.destinationToken = data.token;
    console.log(data.token)
  }

  ngOnInit() {
    //const token2 = this.route.snapshot.params['token']; console.log(token2)
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
          'prg-2109d76e-225c-4176-ab59-f7f94535a46a', Validators.required
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
        console.log(data)
        this.isLoadingResults = false;
        if (data.mensaje == ' ') {
          /* this
            .router
            .navigate(['/usuarios']);
*/
          Swal.fire(data.mensaje)
        } else {
          Swal.fire({position: 'top-end', type: 'success', title: 'Pago emitido con éxito', showConfirmButton: false, timer: 1500})
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
  onNoClick() : void {
    this
      .dialogRef
      .close();
  }

}
