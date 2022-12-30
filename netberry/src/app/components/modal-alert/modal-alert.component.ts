import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalAlert } from '../../interfaces/modal-alert.interface';


@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {
  public confirm: boolean;
  title: string;
  constructor(
    private dialogRef: MatDialogRef<ModalAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalAlert) { 
      this.title = data.title
      this.confirm = false;
    }

  ngOnInit(): void {
    
  }

  onAccept(): void {
    this.confirm = true;
    this.dialogRef.close(this.confirm);
  }

}
