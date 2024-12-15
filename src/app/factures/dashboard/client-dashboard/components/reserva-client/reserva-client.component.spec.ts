import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaClientComponent } from './reserva-client.component';

describe('ReservaClientComponent', () => {
  let component: ReservaClientComponent;
  let fixture: ComponentFixture<ReservaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
