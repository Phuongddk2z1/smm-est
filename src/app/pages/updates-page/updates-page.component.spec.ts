import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesPageComponent } from './updates-page.component';

describe('UpdatesPageComponent', () => {
  let component: UpdatesPageComponent;
  let fixture: ComponentFixture<UpdatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
