import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListUserComponent } from './all-list-user.component';

describe('AllListUserComponent', () => {
  let component: AllListUserComponent;
  let fixture: ComponentFixture<AllListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllListUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
