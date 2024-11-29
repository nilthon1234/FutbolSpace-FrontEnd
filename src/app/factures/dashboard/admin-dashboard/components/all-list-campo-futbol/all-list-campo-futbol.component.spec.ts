import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListCampoFutbolComponent } from './all-list-campo-futbol.component';

describe('AllListCampoFutbolComponent', () => {
  let component: AllListCampoFutbolComponent;
  let fixture: ComponentFixture<AllListCampoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllListCampoFutbolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllListCampoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
