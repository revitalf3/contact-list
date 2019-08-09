import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getContactsMock } from './contacts.mock';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpClientStub: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientStub = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    httpClientStub.get.and.returnValue(of({ folders: getContactsMock() }));


    TestBed.configureTestingModule({
      providers: [ContactsService,
        { provide: HttpClient, useValue: httpClientStub }]
    });

    service = TestBed.get(ContactsService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllContacts', () => {
    it('should call getAllContacts', () => {
      service.getAllContacts();
      expect(httpClientStub.get).toHaveBeenCalledWith(
        'https://candidate-test.herokuapp.com/contacts'
      );
    });
  });
});


