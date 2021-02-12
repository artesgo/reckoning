import { Component, OnInit } from '@angular/core';
import { GroceryService } from '@artesgo/grocery';
import { Observable } from 'rxjs';

@Component({
  selector: 'artesgo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  item$: Observable<any[]>;
  constructor(private gs: GroceryService) { }

  ngOnInit(): void {
    this.item$ = this.gs.getGroceryList();
  }

}
