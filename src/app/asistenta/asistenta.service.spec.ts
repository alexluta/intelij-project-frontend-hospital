import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AsistentaService } from './asistenta.service';

describe('AsistentaService', () => {
  let service: AsistentaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsistentaService]
    });
    service = TestBed.inject(AsistentaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch asistenta data', () => {
    const mockAsistente = [
      { id: 1, nume: 'Mircea', prenume: 'dwq', specializare: 'dwq' },
      { id: 2, nume: 'Ion', prenume: 'few', specializare: 'dew' },
      { id: 3, nume: 'Vasile', prenume: 'dqw', specializare: 'dwq' }
    ];

    service.getAsistente().subscribe(asistente => {
      expect(asistente.length).toBe(3);
      expect(asistente).toEqual(mockAsistente);
    });

    const req = httpMock.expectOne('http://localhost:8080/raportAsistente');
    expect(req.request.method).toBe('GET');
    req.flush(mockAsistente);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
