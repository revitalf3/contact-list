import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-serach-box',
  templateUrl: './serach-box.component.html',
  styleUrls: ['./serach-box.component.sass']
})
export class SerachBoxComponent implements OnInit, OnDestroy {
  @ViewChild('search', {static: true}) emailRef: ElementRef;

  @Output() searchTextChanged: EventEmitter<any> = new EventEmitter<any>();
  public searchText = '';
  private eventSubscription: Subscription;


  constructor() {
  }

  ngOnInit() {

    this.eventSubscription = fromEvent(this.emailRef.nativeElement, 'keyup')
      .pipe(map((evt: any) => evt.target.value),
        debounceTime(200),
        distinctUntilChanged())
      .subscribe((text: string) => this.searchTextChanged.emit(text));

  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }


}
