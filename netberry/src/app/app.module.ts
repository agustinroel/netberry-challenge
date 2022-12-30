import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    ModalAlertComponent,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule, 
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
