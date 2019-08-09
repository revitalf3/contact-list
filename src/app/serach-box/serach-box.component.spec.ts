import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachBoxComponent } from './serach-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SerachBoxComponent', () => {
  let component: SerachBoxComponent;
  let fixture: ComponentFixture<SerachBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachBoxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
