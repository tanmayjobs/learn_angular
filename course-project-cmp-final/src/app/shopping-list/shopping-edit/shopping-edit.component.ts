import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent{
  @ContentChild('heading') heading: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;
  @Output() itemAdded = new EventEmitter<{ingredientName: string, ingredientAmount: number}>();

  constructor() {}

  addItem(ingredientName: HTMLInputElement){
    this.itemAdded.emit({
      ingredientName: ingredientName.value,
      ingredientAmount: Number(this.ingredientAmount.nativeElement.value)
    });
    this.clear(ingredientName, this.ingredientAmount.nativeElement);
  }

  clear(ingredientName: HTMLInputElement, ingredientAmount: HTMLInputElement){
    ingredientName.value = "";
    ingredientAmount.value = "";
  }

  ngOnInit() {}
}
