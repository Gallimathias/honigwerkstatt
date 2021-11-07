import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { from, fromEvent, fromEventPattern } from 'rxjs';
import { WindowInformationService } from './window-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'honigwerkstatt';

  constructor(public windowInformation: WindowInformationService) {
    
  }
}
