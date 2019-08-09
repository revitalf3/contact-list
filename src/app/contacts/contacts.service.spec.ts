import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import {of} from 'rxjs';

describe('ContactsService', () => {
  let service: ContactsService;
  let contactsServiceStub: jasmine.SpyObj<ContactsService>;

  beforeEach(() => {
    contactsServiceStub = jasmine.createSpyObj('ContactsService', ['getAllContacts']);
    contactsServiceStub.getAllContacts.and.returnValue(of(getFoldersMock()));

    TestBed.configureTestingModule({
      providers: [ContactsService]
    });

    service = TestBed.get(ContactsService);
  });


  it('should be created', () => {
    const service: ContactsService = TestBed.get(ContactsService);
    expect(service).toBeTruthy();
  });
});
