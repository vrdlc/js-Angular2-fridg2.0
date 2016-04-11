import { Component, EventEmitter } from 'angular2/core';
import { ShoppingListComponent } from './shopping-list.component';
import { Shopping } from './shopping.model';


@Component({
  selector: 'my-app',
  directives: [ShoppingListComponent],
  template: `
  <div class="container">
    <h1>Shopping List</h1>
    <shopping-list
    [shoppingList]="shoppings" (onShoppingSelect)="shoppingWasSelected($event)">
    </shopping-list>
  </div>
  `
})
export class AppComponent {
  public shoppings: Shopping [];
  constructor() {
    this.shoppings = [
      new Shopping("Milk, soy", 0),
      new Shopping("Eggs, 18", 1),
      new Shopping("Cereal, Count Chocula", 2),
    ];
  }
  shoppingWasSelected(clickedShopping: Shopping): void {
    console.log('parent', clickedShopping);
  }
}
