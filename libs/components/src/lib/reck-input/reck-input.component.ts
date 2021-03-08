import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'reck-input',
  templateUrl: './reck-input.component.html',
  styleUrls: ['./reck-input.component.scss']
})
export class ReckInputComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  static _id = 0;
  constructor() {
  }

  ngOnInit(): void {
    if (!this.id) {
      this.id = `reck-input-${ReckInputComponent._id++}`;
    }
  }
}
