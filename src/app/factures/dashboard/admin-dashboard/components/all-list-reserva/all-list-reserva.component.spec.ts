import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListReservaComponent } from './all-list-reserva.component';

describe('AllListReservaComponent', () => {
  let component: AllListReservaComponent;
  let fixture: ComponentFixture<AllListReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllListReservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllListReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
