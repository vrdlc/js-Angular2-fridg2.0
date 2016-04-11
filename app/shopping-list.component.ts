import { Component, EventEmitter } from 'angular2/core';
import { ShoppingComponent } from './shopping.component';
import { Shopping } from './shopping.model';

@Component({
  selector: 'shopping-list',
  inputs: ['shoppingList'],
  outputs: ['onShoppingSelect'],
  directives: [ShoppingComponent],
  template: `
  <shopping-display *ngFor="#currentShopping of shoppingList" (click)="shoppingClicked(currentShopping)"
  [class.selected]="currentShopping === selectedShopping">
  </shopping-display>
  `
})
export class ShoppingListComponent {
  public shoppingList: Shopping[];
  public onShoppingSelect: EventEmitter<Shopping>;
  public selectedShopping: Shopping;
  constructor() {
    this.onShoppingSelect = new EventEmitter();
  }
  shoppingClicked(clickedShopping: Shopping): void {
    console.log('child', clickedShopping);
    this.onShoppingSelect.emit(clickedShopping);
  }
}
