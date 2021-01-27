import { Component, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'artesgo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title$ = new BehaviorSubject('Growcery');
  year;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  toggleDarkMode() {
    this.renderer.addClass(document.body, 'darkness');
  }
}
