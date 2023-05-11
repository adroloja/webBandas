import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBandaComponent } from './perfil-banda.component';

describe('PerfilBandaComponent', () => {
  let component: PerfilBandaComponent;
  let fixture: ComponentFixture<PerfilBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
