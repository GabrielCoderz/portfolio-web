import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  private cvURL = 'https://cv-gabriel-maia.s3.amazonaws.com/CV.pdf'

  constructor() {}

  openCV() {
    window.open(this.cvURL, '_blank')
  }
}
