import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-serach-box',
  templateUrl: './serach-box.component.html',
  styleUrls: ['./serach-box.component.sass']
})
export class SerachBoxComponent implements OnInit {
  @ViewChild('search', {static: true}) emailRef: ElementRef;

  @Output() searchTextChanged: EventEmitter<any> = new EventEmitter<any>();
  public searchText = '';

  constructor() {
  }

  ngOnInit() {

    fromEvent(this.emailRef.nativeElement, 'keyup')
      .pipe(map((evt: any) => evt.target.value),
        debounceTime(200),
        distinctUntilChanged())
      .subscribe((text: string) => this.searchTextChanged.emit(text));

  }


}
