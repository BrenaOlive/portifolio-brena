import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repository } from '../types/repository.interface';

const REPOS_API = 'https://api.github.com/users/BrenaOlive/repos?per_page=50';

type CacheEntry<T> = {
  etag: string | null;
  data: T;
  ts: number;
};

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private TTL_MS = 60 * 60 * 1000;

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private getCache<T>(key: string): CacheEntry<T> | null {
    if (!this.isBrowser()) return null;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw) as CacheEntry<T>;
      if (Date.now() - parsed.ts < this.TTL_MS) return parsed;
      return null;
    } catch {
      return null;
    }
  }

  private setCache<T>(key: string, entry: CacheEntry<T>): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(key, JSON.stringify(entry));
  }

  private langKey(url: string): string {
    return `lang.${btoa(url)}`;
  }

  getRepos(): Observable<Repository[]> {
    const cacheKey = 'repos.cache';
    const cached = this.getCache<Repository[]>(cacheKey);
    const headers = new HttpHeaders(
      cached?.etag ? { 'If-None-Match': cached.etag } : {},
    );

    return this.http.get(REPOS_API, { observe: 'response', headers }).pipe(
      map((res: HttpResponse<any>) => {
        const etag = res.headers.get('ETag');
        const data = res.body as Repository[];
        this.setCache(cacheKey, { etag, data, ts: Date.now() });
        return data;
      }),
      catchError((err) => {
        if (err.status === 304 && cached?.data) return of(cached.data);
        if (cached?.data) return of(cached.data);
        throw err;
      }),
    );
  }

  getRepoLanguages(url: string): Observable<{ [lang: string]: number }> {
    const cacheKey = this.langKey(url);
    const cached = this.getCache<{ [lang: string]: number }>(cacheKey);
    const headers = new HttpHeaders(
      cached?.etag ? { 'If-None-Match': cached.etag } : {},
    );

    return this.http.get(url, { observe: 'response', headers }).pipe(
      map((res: HttpResponse<any>) => {
        const etag = res.headers.get('ETag');
        const data = res.body as { [lang: string]: number };
        this.setCache(cacheKey, { etag, data, ts: Date.now() });
        return data;
      }),
      catchError((err) => {
        if (err.status === 304 && cached?.data) return of(cached.data);
        if (cached?.data) return of(cached.data);
        throw err;
      }),
    );
  }
}
