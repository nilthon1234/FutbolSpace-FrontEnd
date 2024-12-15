import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarClientComponent } from './left-sidebar-client.component';

describe('LeftSidebarClientComponent', () => {
  let component: LeftSidebarClientComponent;
  let fixture: ComponentFixture<LeftSidebarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidebarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
