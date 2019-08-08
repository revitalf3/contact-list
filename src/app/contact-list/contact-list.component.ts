import {Component, Input, OnInit} from '@angular/core';
import { Contact } from '../contacts/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
  @Input() contactsList: Contact[];

  constructor() { }

  ngOnInit() {


  }

}
