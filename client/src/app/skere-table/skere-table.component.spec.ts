import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkereTableComponent } from './skere-table.component';

describe('SkereTableComponent', () => {
  let component: SkereTableComponent;
  let fixture: ComponentFixture<SkereTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkereTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkereTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
