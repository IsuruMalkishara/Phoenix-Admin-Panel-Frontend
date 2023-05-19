import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalityComponent } from './add-modality.component';

describe('AddModalityComponent', () => {
  let component: AddModalityComponent;
  let fixture: ComponentFixture<AddModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
