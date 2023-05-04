import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalityComponent } from './delete-modality.component';

describe('DeleteModalityComponent', () => {
  let component: DeleteModalityComponent;
  let fixture: ComponentFixture<DeleteModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
