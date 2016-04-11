import { Component, EventEmitter } from 'angular2/core';


@Component({
  selector: 'shopping-list',
  inputs: ['shoppingList'],
  outputs: ['onShoppingSelect'],
  template: `
  <h3 *ngFor="#currentShopping of shoppingList" (click)="shoppingClicked(currentShopping)">
  {{ currentShopping.description }}
  </h3>
  `
})
export class ShoppingListComponent {
  public shoppingList: Shopping[];
  public onShoppingSelect: EventEmitter<Shopping>;
  constructor() {
    this.onShoppingSelect = new EventEmitter();
  }
  shoppingClicked(clickedShopping: Shopping): void {
    console.log('child', clickedShopping);
    this.onShoppingSelect.emit(clickedShopping);
  }
}



@Component({
  selector: 'my-app',
  directives: [ShoppingListComponent],
  template: `
  <div class="container">
  <h1>Shopping List</h1>
  <shopping-list [shoppingList]="shoppings" (onShoppingSelect)="shoppingWasSelected($event)">
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

export class Shopping {
  constructor(public description: string, public id: number) {

  }
}
