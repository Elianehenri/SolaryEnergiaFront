import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidComponent } from './cadastro-unid.component';

describe('CadastroUnidComponent', () => {
  let component: CadastroUnidComponent;
  let fixture: ComponentFixture<CadastroUnidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUnidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUnidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
