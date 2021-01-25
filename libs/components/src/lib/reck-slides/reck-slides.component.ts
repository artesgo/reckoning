import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reck-slides',
  templateUrl: './reck-slides.component.html',
  styleUrls: ['./reck-slides.component.scss']
})
export class ReckSlidesComponent implements OnInit {
  @Output() slide: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
