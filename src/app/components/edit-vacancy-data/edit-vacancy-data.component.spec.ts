import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVacancyDataComponent } from './edit-vacancy-data.component';

describe('EditVacancyDataComponent', () => {
  let component: EditVacancyDataComponent;
  let fixture: ComponentFixture<EditVacancyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVacancyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVacancyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
