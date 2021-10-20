import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMoviesComponent } from './cadastro-movies.component';

describe('CadastroMoviesComponent', () => {
  let component: CadastroMoviesComponent;
  let fixture: ComponentFixture<CadastroMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
