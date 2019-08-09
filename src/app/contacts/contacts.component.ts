import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Contact} from './contact';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  public AllContactsList: Contact[];
  public contactsList: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getAllContacts()
      .pipe(first())
      .subscribe((res: Contact[]) => {
        this.contactsList = this.AllContactsList = res;
      });
  }

  onSearchText(text): void {
    this.contactsList = this.AllContactsList.filter(contact => contact.name.toLowerCase().includes(text));
  }

}
