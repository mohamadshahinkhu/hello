import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxhomeComponent } from './inboxhome.component';

describe('InboxhomeComponent', () => {
  let component: InboxhomeComponent;
  let fixture: ComponentFixture<InboxhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
