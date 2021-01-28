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
  dark = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  toggleDarkMode() {
    if (this.dark) {
      this.dark = false;
      this.renderer.removeClass(document.body, 'dark-mode');
    } else {
      this.dark = true;
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }
}
