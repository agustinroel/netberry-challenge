import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationComponentService {
  private readonly _modalTaskEditComunication = new BehaviorSubject({});
  readonly modalTaskEditComunication$ = this._modalTaskEditComunication.asObservable();

  constructor() { }

  setModalTaskEdit(modal: any): void{
    this._modalTaskEditComunication.next(modal)
  }
}
