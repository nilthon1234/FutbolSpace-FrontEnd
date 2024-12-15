import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCofigAppsComponent } from './client-cofig-apps.component';

describe('ClientCofigAppsComponent', () => {
  let component: ClientCofigAppsComponent;
  let fixture: ComponentFixture<ClientCofigAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCofigAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCofigAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
