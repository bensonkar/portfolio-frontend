import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToAllComponent } from './send-to-all.component';

describe('SendToAllComponent', () => {
  let component: SendToAllComponent;
  let fixture: ComponentFixture<SendToAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
