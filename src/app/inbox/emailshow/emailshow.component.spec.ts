import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailshowComponent } from './emailshow.component';

describe('EmailshowComponent', () => {
  let component: EmailshowComponent;
  let fixture: ComponentFixture<EmailshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
