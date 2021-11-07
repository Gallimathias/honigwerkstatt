import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { WindowInformationService } from '../window-information.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() drawer?: MatDrawer;

  
  public get IsOpen() : boolean {
    return this.drawer?.opened ?? false;
  }
  
  constructor(public windowInformation: WindowInformationService) { }

  ngOnInit(): void {
  }

}
