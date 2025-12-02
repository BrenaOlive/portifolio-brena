import { Repository } from './../../types/repository.interface';
import { Component, inject, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-caixas-projetos',
  standalone: true,
  templateUrl: './caixas-projetos.component.html',
  styleUrl: './caixas-projetos.component.scss',
  providers: [GithubService],
})
export class CaixasProjetosComponent implements OnInit {
  githubService = inject(GithubService);
  repos: Repository[] = [];

  ngOnInit() {
    this.githubService.getRepos().subscribe((repos) => {
      this.repos = repos;

      this.repos.forEach((repo) => {
        this.githubService
          .getRepoLanguages(repo.languages_url)
          .subscribe((langs) => {
            repo.languages = Object.keys(langs);
          });
      });
    });
  }
}
