import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IUsuario } from './../Interfaces/Usuario.interface';
import { PagoComponent } from './../pago/pago.component';

import { Router } from '@angular/router'


import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subject, merge, Observable, of } from 'rxjs';

@Component({ selector: 'app-usuarios', templateUrl: './usuarios.component.html', styleUrls: ['./usuarios.component.css'] })
export class UsuariosComponent implements OnInit,AfterViewInit {
  //data: IUsuario[];
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
  observador: Subject<any> = new Subject()
  totalRegistros: number
  registrosPorPagina: number = 10
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoadingResults = true;
  public data = new MatTableDataSource<IUsuario>();

  constructor(private api: ApiService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {

   this.obtenerUsuarios();
    
  }

  ngAfterViewInit(): void {
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  }
obtenerUsuarios(){
this
  .api
  .obtenerUsuarios()
  .subscribe((res: any) => {
    this.data.data = res.data as IUsuario[]
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
  public doFilter = (value: string) => {
    this.data.filter = value.trim().toLocaleLowerCase();
  }

}
