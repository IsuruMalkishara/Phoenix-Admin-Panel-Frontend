import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobTypeComponent } from './delete-job-type.component';

describe('DeleteJobTypeComponent', () => {
  let component: DeleteJobTypeComponent;
  let fixture: ComponentFixture<DeleteJobTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJobTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJobTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
