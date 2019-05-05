import { Component, OnInit } from '@angular/core';
import { IUsuario } from './../Interfaces/Usuario.interface';
import { PagoComponent } from './../pago/pago.component';

import { Router } from '@angular/router'
import { ApiService } from '../api.service';

import { MatTableDataSource, MatSort, MatPaginator, MatSortModule } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  data: IUsuario[];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'addressLine1',
    'city',
    'stateProvince',
    'country',
    'addPay',
    'addPago',
    'verCuentas'
  ];


  isLoadingResults = true;

  constructor(private api: ApiService
    , private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.api.obtenerUsuarios()
      .subscribe((res: any) => {
        this.data = res.data
        console.log(this.data)
        this.isLoadingResults = false;

      }, err => {
        this
          .router
          .navigate(["/usuarios"])
        console.log(err);
        this.isLoadingResults = false;
      })
      
  }

  public agregarMetodoPago = (token: string) => { }
  AddContact = (token: string) => {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '80%';
    dialogConfig.data = {
      token: token
    };

    this
      .dialog
      .open(PagoComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('The dialog was closed');
      });

  }

}

