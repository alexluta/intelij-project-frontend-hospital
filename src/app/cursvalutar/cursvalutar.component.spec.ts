import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursvalutarComponent } from './cursvalutar.component';

describe('CursvalutarComponent', () => {
  let component: CursvalutarComponent;
  let fixture: ComponentFixture<CursvalutarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursvalutarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursvalutarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
