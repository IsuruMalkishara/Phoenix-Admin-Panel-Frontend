import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobCategoryComponent } from './delete-job-category.component';

describe('DeleteJobCategoryComponent', () => {
  let component: DeleteJobCategoryComponent;
  let fixture: ComponentFixture<DeleteJobCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJobCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJobCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
