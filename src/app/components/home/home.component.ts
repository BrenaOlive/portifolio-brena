import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainSectionComponent } from '../../shared/main-section/main-section.component';
import { provideHttpClient } from '@angular/common/http';
import { AboutComponent } from '../../shared/about/about.component';
import { ProjetosComponent } from '../../shared/projetos/projetos.component';
import { SocialMediaComponent } from '../../shared/social-media/social-media.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainSectionComponent,
    AboutComponent,
    ProjetosComponent,
    SocialMediaComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (response) => console.log(response),
    });
  }
}
