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
      headers: new HttpHeaders().set('Authorization', 'Bearer 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') // Substitua 'seu-token' pelo seu token real
    };

    return this.httpClient.get(`${this.apiURL}/users/GabrielCoderz/repos`, parametros).pipe(
      mergeMap((data: any) => {
        console.log(data)
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
