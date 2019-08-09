import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {SerachBoxComponent} from './serach-box/serach-box.component';
import {ContactsComponent} from './contacts/contacts.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactListComponent,
        SerachBoxComponent,
        ContactsComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatGridListModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });




});
