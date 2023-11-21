import { Observable } from 'rxjs';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<any>;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.projects$ = this.githubService.getProjects()
  }

  goToRepo(url: string) {
    window.open(url, '_blank')
  }

}
