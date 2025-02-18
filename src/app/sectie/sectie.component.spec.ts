import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectieComponent } from './sectie.component';

describe('SectieComponent', () => {
  let component: SectieComponent;
  let fixture: ComponentFixture<SectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
