import { Component, Input, OnInit } from '@angular/core';
import { PartnerLinkModel } from './partner-link-model';

@Component({
  selector: 'app-partner-link',
  templateUrl: './partner-link.component.html',
  styleUrls: ['./partner-link.component.scss'],
})
export class PartnerLinkComponent implements OnInit {
  @Input() public Model: PartnerLinkModel = { Logo: '', Href: '' };

  constructor() {}

  ngOnInit(): void {}
}
