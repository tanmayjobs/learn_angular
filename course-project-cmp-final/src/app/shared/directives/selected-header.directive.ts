import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[toggleColor]',
})
export class HeaderIconDirective implements OnInit {
  @HostBinding('style.color') textColor: string;
  @Input('toggleColor') color: string = "black";
  @Input() title = "something";
  @HostBinding('title') eleTitle: string = "IN directive";

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('mouseenter')
  mouseEnter(_: Event) {
    // this.element.nativeElement.style.backgroundColor = '#BBBBBB';
    this.textColor = this.color;
  }

  @HostListener('mouseout')
  mouseOut(_: Event) {
    // this.element.nativeElement.style.backgroundColor = 'transparent';
    this.textColor = '#777';
  }
  getTitle(){
    console.log("component");
    return "component title";
  }
}
