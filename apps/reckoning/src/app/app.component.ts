import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'artesgo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reckoning';
  year;

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  clicky() {
    console.log('yo')
  }
}
