import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCabComponent } from './available-cab.component';

describe('AvailableCabComponent', () => {
  let component: AvailableCabComponent;
  let fixture: ComponentFixture<AvailableCabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
