import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { from, fromEvent, fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'honigwerkstatt';

  public IsMobile: boolean = false;

  constructor() {
    window.onresize = () => {
      this.IsMobile = window.outerWidth < 426;
    };

  }
}
