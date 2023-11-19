import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  private urlCV = 'https://cv-gabriel-maia.s3.us-east-1.amazonaws.com/CV.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQCWDRXUgjJCMP6bna926sT0E3XlLmsRP%2B2au1HoKj4VvwIgHRMTDij30LB2F7%2BaaqeubKiNe43DMT%2F7NE%2B2VCdVSo0q7QII2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzNDcxODA5MjYxODYiDNvnwoJQzODSDGkK1SrBAit4iw0jViUOrADLgNhrwzanelCFg6NP%2BG3aEMlCYWxOiRYr4TSz%2FrIjc3RKrRP%2FyzUrSl6nuW%2BBnuCa034S4zktFGiPbZ8VIwTvKE2mYF5DiTk1xoKqlkShlkawFZmH6TmmuZIcxWm91MbHTygRdqzvKZKs2n%2BqOYWh3AXfH0P49dlSLQXjBZrkSMr%2BPtkv2J4rNsi7IRujjb7%2B7MiF%2FkXm1pNmhmIk8X6nK3yrp2aaTJyVtPmsglnDfpb5fFuXB0kDJvXzW1O2bBNKJwOTkzUBVdT%2F4QxDO1VMue26lupYQt%2BpSus5rXFLs%2BDZdKo2fOoM4VNdrCAaYHd3dRcg1az8Eish0Shs%2B6dKb0ETDmz7KfqtR4qYoba%2FkJCGDK2CB%2FfJuLzpfRHlfScnSV3k4gT2dTlk7ZgQWdagK7ZJKqVO1jD9%2BuiqBjqzAh16lvRK2%2BlctUvU97CzILgdB9ol%2BOhS%2B47J7dCr9%2B5roYJb%2BDMa96iyopMp7mVlsB%2FJyfO0BihLEBomLciaUDwNzS49xO1QdvqYKrtwN1HfOesjMl3prgSIIdhXdmBu9q0eQ%2BdNHO3Nnuo%2BfKYpJ9lx%2BnGuPono23wUiC547HeQsTxl1FNua%2BC%2Ba%2FCWul5qSmnVSTUSRxvSEcZpUJaNjdt12FlrI9CsdeEDoVBf0hpIlBlPSWi7qpdBCXI2nTousg3v5Qfu54vfRcHcUSXt9NBHOcd7n2iaZ4k5U4mgETjSR7QLDJx40MiUtuKGEfacSPJH6abLwV0iaVgpt%2FLOc%2BAr4YjaQDg03aqvpWXyKciJWdDa1Vwu0iEVpjMLGoyORNlOQMxBoBP4TA9mvpZGFZTeT3k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231119T185229Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVBVMYQTVCJXPJJOW%2F20231119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ff2349bd3c9ce5573cf95a30a52e8bcabe49556f7a983ad0839b339933d8b215'

  constructor() {}

  openCV() {
    window.open(this.urlCV, '_blank')
  }
}
