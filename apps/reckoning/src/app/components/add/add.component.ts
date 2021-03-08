import { Component, OnInit } from '@angular/core';
import { Grocery, GroceryService } from '@artesgo/grocery';

@Component({
  selector: 'artesgo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private gs: GroceryService) { }

  ngOnInit(): void {
  }

  add() {
    const item: Grocery = {
      aisle: 1,
      bulk: 2,
      price: 3.50,
      name: 'banans',
      sale: 3.00,
      shelf: 2,
      store: 'lakeshore',
      unit: 'lb',
    }
    // perform validation
    this.gs.addItem(item);
  }
}
