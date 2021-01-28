import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'reck-footer',
  templateUrl: './reck-footer.component.html',
  styleUrls: ['./reck-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReckFooterComponent implements OnInit {
  @Input() dark: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
