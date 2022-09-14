import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailindexComponent } from './emailindex.component';

describe('EmailindexComponent', () => {
  let component: EmailindexComponent;
  let fixture: ComponentFixture<EmailindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
