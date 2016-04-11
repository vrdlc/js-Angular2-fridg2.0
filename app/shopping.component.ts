import { Component } from 'angular2/core';
import { Shopping } from './shopping.model';


@Component({
  selector: 'shopping-display',
  inputs: ['shopping'],
  template: `
  <h3>{{ shopping.description }}</h3>
  `
})
export class ShoppingComponent {
  public shopping: Shopping;
}
