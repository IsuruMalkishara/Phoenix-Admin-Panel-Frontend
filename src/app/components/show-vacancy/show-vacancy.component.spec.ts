import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVacancyComponent } from './show-vacancy.component';

describe('ShowVacancyComponent', () => {
  let component: ShowVacancyComponent;
  let fixture: ComponentFixture<ShowVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
