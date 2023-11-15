import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVisualComponent } from './main-visual.component';

describe('MainVisualComponent', () => {
  let component: MainVisualComponent;
  let fixture: ComponentFixture<MainVisualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainVisualComponent]
    });
    fixture = TestBed.createComponent(MainVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
