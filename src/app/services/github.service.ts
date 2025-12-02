import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../types/repository.interface';

export const GITHUB_API_URL = 'https://api.github.com/users/BrenaOlive/repos';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  httpClient = inject(HttpClient);

  getRepos(): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(GITHUB_API_URL);
  }

  getRepoLanguages(url: string): Observable<Repository> {
    return this.httpClient.get<Repository>(url);
  }
}
