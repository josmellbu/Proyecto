import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordipppComponent } from './coordippp.component';

describe('CoordipppComponent', () => {
  let component: CoordipppComponent;
  let fixture: ComponentFixture<CoordipppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordipppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordipppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
