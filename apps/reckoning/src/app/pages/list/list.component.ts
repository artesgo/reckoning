import { Component, OnInit } from '@angular/core';
import { Grocery, GroceryService } from '@artesgo/grocery';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'artesgo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'sale', 'unit', 'aisle', 'shelf', 'actions'];
  datasource$: Observable<any[]>;
  constructor(private gs: GroceryService) { }

  ngOnInit(): void {
    this.datasource$ = this.gs.getGroceryList().pipe(
      tap(data => console.log(data))
    );
  }

  edit(row: Grocery) {
    console.log(row);
  }
}
