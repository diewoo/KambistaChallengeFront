import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasUsuarioComponent } from './cuentas-usuario.component';

describe('CuentasUsuarioComponent', () => {
  let component: CuentasUsuarioComponent;
  let fixture: ComponentFixture<CuentasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
