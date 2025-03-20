import { TestBed } from '@angular/core/testing';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SectieService } from './sectie.service';

describe('SectieService', () => {
  let service: SectieService;
 // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    //  imports: [HttpClientTestingModule],
      providers: [SectieService]
    });
    service = TestBed.inject(SectieService);
  //  httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch sectie data', () => {
    const mockSectii = [
      { id: 1, nume: 'Mircea', prenume: 'dwq', specializare: 'dwq' },
      { id: 2, nume: 'Ion', prenume: 'few', specializare: 'dew' },
      { id: 3, nume: 'Vasile', prenume: 'dqw', specializare: 'dwq' }
    ];

    // Apelează metoda de obținere a medicilor
    service.getSectii().subscribe(sectii => {
      expect(sectii.length).toBe(3);
      expect(sectii).toEqual(mockSectii);
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
