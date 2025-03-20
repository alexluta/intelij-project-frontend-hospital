import { TestBed } from '@angular/core/testing';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SalonService } from './salon.service';

describe('SalonService', () => {
  let service: SalonService;
 // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    //  imports: [HttpClientTestingModule],
      providers: [SalonService]
    });
    service = TestBed.inject(SalonService);
  //  httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch salon data', () => {
    const mockSaloane = [
      { id: 1, nume: 'Mircea', prenume: 'dwq', specializare: 'dwq' },
      { id: 2, nume: 'Ion', prenume: 'few', specializare: 'dew' },
      { id: 3, nume: 'Vasile', prenume: 'dqw', specializare: 'dwq' }
    ];

    // Apelează metoda de obținere a medicilor
    service.getSaloane().subscribe(saloane => {
      expect(saloane.length).toBe(3);
      expect(saloane).toEqual(mockSaloane);
    });

    // Simulează cererea HTTP
    //const req = httpMock.expectOne('http://localhost:8080/raportMedici');
  //  expect(req.request.method).toBe('GET');
  //  req.flush(mockMedici);
  });

  afterEach(() => {
  //  httpMock.verify(); // Verifică dacă nu mai sunt cereri HTTP nefinalizate
  });
});
