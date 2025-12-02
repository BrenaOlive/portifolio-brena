import { Component, Output } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
