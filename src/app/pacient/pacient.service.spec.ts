import { TestBed } from '@angular/core/testing';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PacientService } from './pacient.service';

describe('PacientService', () => {
  let service: PacientService;
 // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    //  imports: [HttpClientTestingModule],
      providers: [PacientService]
    });
    service = TestBed.inject(PacientService);
  //  httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch pacient data', () => {
    const mockPacienti = [
      { id: 1, nume: 'Mircea', prenume: 'dwq', specializare: 'dwq' },
      { id: 2, nume: 'Ion', prenume: 'few', specializare: 'dew' },
      { id: 3, nume: 'Vasile', prenume: 'dqw', specializare: 'dwq' }
    ];

    // Apelează metoda de obținere a medicilor
    service.getPacienti().subscribe(pacienti => {
      expect(pacienti.length).toBe(3);
      expect(pacienti).toEqual(mockPacienti);
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
