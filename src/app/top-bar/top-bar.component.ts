import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() drawer?: MatDrawer;
  public showFiller: boolean = false;
  public faInstagram: IconDefinition = faInstagram;
  
  constructor() { }

  ngOnInit(): void {
  }


  public openInNewTab(url: string): void{
    window.open(url, "_blank");
  }

}
