import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INPUTComponent } from './input.component';

describe('INPUTComponent', () => {
  let component: INPUTComponent;
  let fixture: ComponentFixture<INPUTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INPUTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INPUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
