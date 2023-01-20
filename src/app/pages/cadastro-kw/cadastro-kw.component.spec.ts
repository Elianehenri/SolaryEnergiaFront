import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroKwComponent } from './cadastro-kw.component';

describe('CadastroKwComponent', () => {
  let component: CadastroKwComponent;
  let fixture: ComponentFixture<CadastroKwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroKwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroKwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
