import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitemParentComponent } from './workitem-parent.component';

describe('WorkitemParentComponent', () => {
  let component: WorkitemParentComponent;
  let fixture: ComponentFixture<WorkitemParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitemParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitemParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
