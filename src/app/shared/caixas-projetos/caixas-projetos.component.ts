import { Component, inject, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Repository } from '../../types/repository.interface';

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
  error?: string;

  ngOnInit() {
    this.githubService.getRepos().subscribe({
      next: (repos) => {
        this.repos = repos;

        const CONCURRENCY = 3; // controla quantas chamadas simultâneas
        from(this.repos).pipe(
          mergeMap(
            (repo) =>
              this.githubService.getRepoLanguages(repo.languages_url).pipe(
                map(langs => [repo, langs] as const)
              ),
            CONCURRENCY
          )
        ).subscribe({
          next: ([repo, langs]) => {
            repo.languages = Object.keys(langs);
          },
          error: () => (this.error = 'Falha ao carregar linguagens')
        });
      },
      error: () => (this.error = 'Falha ao carregar repositórios')
    });
  }
}
