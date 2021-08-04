import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolComponent } from './edit-school.component';

describe('EditSchoolComponent', () => {
  let component: EditSchoolComponent;
  let fixture: ComponentFixture<EditSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
