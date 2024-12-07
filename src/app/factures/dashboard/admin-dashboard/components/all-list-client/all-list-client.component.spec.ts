import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListClientComponent } from './all-list-client.component';

describe('AllListClientComponent', () => {
  let component: AllListClientComponent;
  let fixture: ComponentFixture<AllListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllListClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
