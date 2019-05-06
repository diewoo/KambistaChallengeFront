import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {ApiService} from '../api.service';
import {IUsuario} from '../Interfaces/Usuario.interface'
import {MatTableDataSource, MatSort, MatPaginator, MatSortModule} from '@angular/material';
import { ICuenta } from '../Interfaces/cuentaBanco.interface';
import Swal from 'sweetalert2'
const ELEMENT_DATA : ICuenta[] = [];
@Component({
  selector: 'app-cuentas-usuario',
  templateUrl: './cuentas-usuario.component.html',
  styleUrls: ['./cuentas-usuario.component.css']
})
export class CuentasUsuarioComponent implements OnInit {

  displayedColumns : string[] = [
    'branchId',
    'bankAccountId',
    'bankAccountRelationship',
    'bankAccountPurpose',
    'profileType',
    'firstName',
    'lastName',
    'dateOfBirth',
    'addressLine1',
    'city'
  ];
  dataSource = ELEMENT_DATA;

  isLoadingResults = true;
  constructor(private api : ApiService, private router : Router,
    private route: ActivatedRoute) {}
  ngOnInit() {
    const token = this.route.snapshot.params['token'];
    this
      .api
      .listarCuentasBanco(token)
      .subscribe(res => {
        console.log(res) 
        if(res ==null){
          this.isLoadingResults = false;
          Swal.fire(
            'El usuario no tiene cuentas de banco registradas'
            )
        }else{
          this.dataSource = res.data as ICuenta[];
          this.isLoadingResults = false;
        }
        

      }, err => {
        this.isLoadingResults = false;
        console.log(err);
        
      })

  }
  public agregarMetodoPago = (token : string) => {}
  onNoClick() : void {
    this
    .router
    .navigate(['/usuarios']);
  }
}
