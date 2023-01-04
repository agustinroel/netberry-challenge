import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskModel } from '../../models/task.model';
import { ModalAlert } from '../../interfaces/modal-alert.interface';
import { ComunicationComponentService } from '../../services/comunication-component/comunication-component.service';


@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  public confirm: boolean;
  public showCancelButton = true;
  task: TaskModel;
  tags = ['home', 'groceries', 'entretainment', 'work', 'plans', 'other']
  tasksForm = new FormGroup({
    title: new FormControl('', [Validators.pattern(/^[A-Za-z0-9-_ ]*$/), Validators.required]),
    content: new FormControl('', [Validators.pattern(/^[A-Za-z0-9-_ ]*$/), Validators.required]),
    tag: new FormControl(''),
  })
  constructor(
    private readonly dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalAlert,
    private readonly comunication: ComunicationComponentService) {
    this.confirm = false;
    this.task = new TaskModel();
  }

  ngOnInit() {
    if (this.data.showCancelButton != null && typeof this.data.showCancelButton !== 'undefined') {
      this.showCancelButton = this.data.showCancelButton;
    }
    if (this.data.element) {
      this.tasksForm.controls['title'].setValue(this.data.element.title);
      this.tasksForm.controls['content'].setValue(this.data.element.content);
      this.tasksForm.controls['tag'].setValue(this.data.element.tag);
    }
  }

  onAccept() {
    console.log('task', this.task)
    console.log('value', this.tasksForm.controls['title'].value)
    if (this.data.element) {
      this.task.id = this.data.element.id;
    }
    this.task.title = this.tasksForm.controls['title'].value;
    this.task.content = this.tasksForm.controls['content'].value;
    this.task.tag = this.tasksForm.controls['tag'].value;
    console.log('post', this.task)
    this.confirm = true;
    this.dialogRef.close(this.confirm);
    this.comunication.setModalTaskEdit(this.task);
  }

}
