import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    
    MatIconModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
