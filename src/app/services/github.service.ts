import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiURL = 'https://api.github.com'

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    const parametros = {
      params: {
        page: 1,
        per_page: 4
      },
    };
    
    return this.httpClient.get(`${this.apiURL}/users/GabrielCoderz/repos`, parametros).pipe(
      mergeMap((data: any) => {
        const result = data.map((item: any) =>
          this.getTechnologies(item.languages_url).pipe(
            map(techs => ({
              name: item.name,
              description: item.description,
              techs: (() => {
                let obj = new Object(techs)

                return Object.keys(obj)
              })(),
              repo_url: item.html_url
            }))
          )
        );

        return forkJoin(result);
      })
    );
  }

  getProject(name: string) {
    return this.httpClient.get(`${this.apiURL}/repos/GabrielCoderz/${name}`)
  }

  getTechnologies(url: string) {
    return this.httpClient.get(url)
  }
}
