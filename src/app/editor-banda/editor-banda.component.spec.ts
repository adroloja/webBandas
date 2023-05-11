import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBandaComponent } from './editor-banda.component';

describe('EditorBandaComponent', () => {
  let component: EditorBandaComponent;
  let fixture: ComponentFixture<EditorBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
