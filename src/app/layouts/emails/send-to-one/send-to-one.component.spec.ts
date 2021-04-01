import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToOneComponent } from './send-to-one.component';

describe('SendToOneComponent', () => {
  let component: SendToOneComponent;
  let fixture: ComponentFixture<SendToOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
