import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyEditComponent } from './vacancy-edit.component';

describe('VacancyEditComponent', () => {
  let component: VacancyEditComponent;
  let fixture: ComponentFixture<VacancyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
