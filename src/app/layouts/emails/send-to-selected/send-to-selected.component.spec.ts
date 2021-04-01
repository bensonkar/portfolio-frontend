import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToSelectedComponent } from './send-to-selected.component';

describe('SendToSelectedComponent', () => {
  let component: SendToSelectedComponent;
  let fixture: ComponentFixture<SendToSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
