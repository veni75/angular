import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapozoComponent } from './lapozo.component';

describe('LapozoComponent', () => {
  let component: LapozoComponent;
  let fixture: ComponentFixture<LapozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapozoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
