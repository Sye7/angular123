import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllCenterComponent } from './find-all-center.component';

describe('FindAllCenterComponent', () => {
  let component: FindAllCenterComponent;
  let fixture: ComponentFixture<FindAllCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
