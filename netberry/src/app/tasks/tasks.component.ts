import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { filter, mergeMap, Subject, take, takeUntil } from 'rxjs';
import { ModalAlertComponent } from '../components/modal-alert/modal-alert.component';
import { ModalEditComponent } from '../components/modal-edit/modal-edit.component';
import { Tasks } from '../interfaces/tasks.interface';
import { AppServiceService } from '../services/app-service.service';
import { ComunicationComponentService } from '../services/comunication-component/comunication-component.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  title = 'netberry-challenge';
  tasks: Tasks[] = []
  dataSource = new MatTableDataSource<Tasks>(this.tasks);
  createdTask: any;
  editedTask: any;
  private readonly $destroyUntil = new Subject<boolean>();
  displayedColumns: string[] = ['id', 'title', 'content', 'actions'];
  constructor(
    private appService: AppServiceService,
    private readonly comunication: ComunicationComponentService,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {

    this.appService.listTasks().pipe(take(1)).subscribe((res: Tasks[]) => {
      this.tasks = res;
      this.dataSource.data = res;
    }
    )
  }

  onCreateTask() {
    const newTask = this.dialog.open(ModalEditComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        isEdit: false,
        msg: 'Fill this form to create a new task',
        title: 'Create Task',
        showCancelButton: true
      },
      disableClose: false,
    })

    newTask.afterClosed()
      .pipe(
        filter((value) => !!value),
        mergeMap(() =>
          this.comunication.modalTaskEditComunication$.pipe(take(1))
        ),
        mergeMap((element: any) =>
          this.appService.createTask(element).pipe(takeUntil(this.$destroyUntil)))
      )
      .subscribe((response: Task) => {
        this.createdTask = response;
        this.dataSource.data.push(this.createdTask);
        this.dataSource._updateChangeSubscription();
      })
  }

  /*onShow(element: any){
    const showPost = this.dialog.open(ModalShowComponent, {
      height: '90%',
      width: '90%',
      data: {
        isEdit: false,
        element: element,
        showCancelButton: true
      },
      disableClose: false
    })
  }*/

  onEdit(element: any) {
    const editTask = this.dialog.open(ModalEditComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        isEdit: true,
        msg: 'Edit this form fields and save to update this task',
        title: 'Update Task',
        showCancelButton: true,
        element: element
      },
      disableClose: false,
    })

    editTask.afterClosed()
      .pipe(
        filter((value) => !!value),
        mergeMap(() =>
          this.comunication.modalTaskEditComunication$.pipe(take(1))
        ),
        mergeMap((editedElement: any) =>
          this.appService
            .updateTask(editedElement)
            .pipe(takeUntil(this.$destroyUntil))
        )
      )
      .subscribe((response: any) => {
        this.editedTask = response;
        const index = this.dataSource.data.indexOf(element);
        this.dataSource.data[index] = this.editedTask;
        this.dataSource._updateChangeSubscription();
      })
  }

  onDelete(item: any) {
    const deleteDialog = this.dialog.open(ModalAlertComponent, {
      data: {
        width: '250px',
        height: '200px',
        title: 'Delete task',
        msg: 'Would you like to delete this task?',
        showCancelButton: true,
      },
      disableClose: true
    })

    deleteDialog.afterClosed().subscribe(result => {
      console.log(result)
      if (result === true) {
        this.appService.deleteTask(item).pipe(take(1)).subscribe((res) => {
          const index = this.dataSource.data.indexOf(item.id);
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription()
        }
        )
      }
    });
  }

}
