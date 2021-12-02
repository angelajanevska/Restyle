import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyRestyleComponent } from './why-restyle.component';

describe('WhyRestyleComponent', () => {
  let component: WhyRestyleComponent;
  let fixture: ComponentFixture<WhyRestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyRestyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyRestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
