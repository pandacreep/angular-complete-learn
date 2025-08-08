import {
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation,
  ElementRef, 
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement')
  element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('p') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    // console.log(
    //   'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    // );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    // dont work
    //console.log('Text content of paragraph: ' + this.paragraph);
    
    // console.log(
    //   'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    // );
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    // dont work
    // console.log(
    //   'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    // );
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
