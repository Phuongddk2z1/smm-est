import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundsPageComponent } from './add-funds-page.component';

describe('AddFundsPageComponent', () => {
  let component: AddFundsPageComponent;
  let fixture: ComponentFixture<AddFundsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFundsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
