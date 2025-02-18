import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentComponent } from './tratament.component';

describe('TratamentComponent', () => {
  let component: TratamentComponent;
  let fixture: ComponentFixture<TratamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
