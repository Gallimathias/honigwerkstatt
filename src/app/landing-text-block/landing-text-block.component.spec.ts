import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTextBlockComponent } from './landing-text-block.component';

describe('LandingTextBlockComponent', () => {
  let component: LandingTextBlockComponent;
  let fixture: ComponentFixture<LandingTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTextBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
