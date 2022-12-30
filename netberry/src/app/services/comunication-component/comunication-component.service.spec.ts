import { TestBed } from '@angular/core/testing';
import { ComunicationComponentService } from '../../services/comunication-component/comunication-component.service';

describe('ComunicationComponentService', () => {
  let service: ComunicationComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicationComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
