import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistentaComponent } from './asistenta.component';

describe('AsistentaComponent', () => {
  let component: AsistentaComponent;
  let fixture: ComponentFixture<AsistentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
