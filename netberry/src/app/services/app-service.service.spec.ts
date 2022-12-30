import { TestBed } from '@angular/core/testing';
import { AppServiceService } from './app-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppServiceService', () => {
  let service: AppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttpClientTestingModule]
    });
    service = TestBed.inject(AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
