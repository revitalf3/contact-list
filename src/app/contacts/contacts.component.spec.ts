import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';

import { ContactsService } from './contacts.service';
import { of } from 'rxjs';

import { getContactsMock } from './contacts.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactsServiceStub: jasmine.SpyObj<ContactsService>;


  beforeEach(async(() => {

    contactsServiceStub = jasmine.createSpyObj('ContactsComponent', ['getAllContacts']);
    contactsServiceStub.getAllContacts.and.returnValue(of(getContactsMock()));



    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      providers: [
        { provide: ContactsService, useValue: contactsServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


