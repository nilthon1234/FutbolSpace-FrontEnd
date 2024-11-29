import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNavbarComponent } from './usuario-navbar.component';

describe('UsuarioNavbarComponent', () => {
  let component: UsuarioNavbarComponent;
  let fixture: ComponentFixture<UsuarioNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
