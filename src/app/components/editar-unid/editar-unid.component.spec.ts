import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidComponent } from './editar-unid.component';

describe('EditarUnidComponent', () => {
  let component: EditarUnidComponent;
  let fixture: ComponentFixture<EditarUnidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUnidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUnidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
