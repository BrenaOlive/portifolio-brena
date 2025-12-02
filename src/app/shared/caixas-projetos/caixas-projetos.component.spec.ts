import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasProjetosComponent } from './caixas-projetos.component';

describe('CaixasProjetosComponent', () => {
  let component: CaixasProjetosComponent;
  let fixture: ComponentFixture<CaixasProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaixasProjetosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaixasProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
