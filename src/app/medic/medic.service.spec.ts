import { TestBed } from '@angular/core/testing';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MedicService } from './medic.service';

describe('MedicService', () => {
  let service: MedicService;
 // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    //  imports: [HttpClientTestingModule],
      providers: [MedicService]
    });
    service = TestBed.inject(MedicService);
  //  httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch medic data', () => {
    const mockMedici = [
      { id: 1, nume: 'Mircea', prenume: 'dwq', specializare: 'dwq' },
      { id: 2, nume: 'Ion', prenume: 'few', specializare: 'dew' },
      { id: 3, nume: 'Vasile', prenume: 'dqw', specializare: 'dwq' }
    ];

    // Apelează metoda de obținere a medicilor
    service.getMedici().subscribe(medici => {
      expect(medici.length).toBe(3);
      expect(medici).toEqual(mockMedici);
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
