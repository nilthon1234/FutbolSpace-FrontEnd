import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClientComponent } from './main-client.component';

describe('MainClientComponent', () => {
  let component: MainClientComponent;
  let fixture: ComponentFixture<MainClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
