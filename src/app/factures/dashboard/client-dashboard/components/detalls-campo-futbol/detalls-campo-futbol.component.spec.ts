import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallsCampoFutbolComponent } from './detalls-campo-futbol.component';

describe('DetallsCampoFutbolComponent', () => {
  let component: DetallsCampoFutbolComponent;
  let fixture: ComponentFixture<DetallsCampoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallsCampoFutbolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallsCampoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
