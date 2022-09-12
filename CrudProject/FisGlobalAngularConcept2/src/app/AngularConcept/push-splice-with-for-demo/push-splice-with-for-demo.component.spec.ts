import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSpliceWithForDemoComponent } from './push-splice-with-for-demo.component';

describe('PushSpliceWithForDemoComponent', () => {
  let component: PushSpliceWithForDemoComponent;
  let fixture: ComponentFixture<PushSpliceWithForDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSpliceWithForDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSpliceWithForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
