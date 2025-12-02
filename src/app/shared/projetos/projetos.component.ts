import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CaixasProjetosComponent } from '../caixas-projetos/caixas-projetos.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [BtnPrimaryComponent, CaixasProjetosComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {}
