import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalAlertComponent } from './modal-alert.component';

describe('ModalAlertComponent', () => {
  let component: ModalAlertComponent;
  let fixture: ComponentFixture<ModalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ ModalAlertComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {provide:MAT_DIALOG_DATA,useValue:{}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
