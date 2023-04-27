import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersVacancyComponent } from './employers-vacancy.component';

describe('EmployersVacancyComponent', () => {
  let component: EmployersVacancyComponent;
  let fixture: ComponentFixture<EmployersVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployersVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
