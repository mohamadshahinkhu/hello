import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailreplyComponent } from './emailreply.component';

describe('EmailreplyComponent', () => {
  let component: EmailreplyComponent;
  let fixture: ComponentFixture<EmailreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailreplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
