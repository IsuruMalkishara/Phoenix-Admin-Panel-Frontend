import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobseekerComponent } from './delete-jobseeker.component';

describe('DeleteJobseekerComponent', () => {
  let component: DeleteJobseekerComponent;
  let fixture: ComponentFixture<DeleteJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJobseekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
