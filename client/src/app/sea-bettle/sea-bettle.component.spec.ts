import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBettleComponent } from './sea-bettle.component';

describe('SeaBettleComponent', () => {
  let component: SeaBettleComponent;
  let fixture: ComponentFixture<SeaBettleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaBettleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaBettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
