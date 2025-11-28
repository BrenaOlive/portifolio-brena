import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'main-section',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
