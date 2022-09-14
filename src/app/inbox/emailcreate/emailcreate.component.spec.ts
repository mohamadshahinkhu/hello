import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailcreateComponent } from './emailcreate.component';

describe('EmailcreateComponent', () => {
  let component: EmailcreateComponent;
  let fixture: ComponentFixture<EmailcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
