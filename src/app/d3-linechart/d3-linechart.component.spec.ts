import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LinechartComponent } from './d3-linechart.component';

describe('D3LinechartComponent', () => {
  let component: D3LinechartComponent;
  let fixture: ComponentFixture<D3LinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3LinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
