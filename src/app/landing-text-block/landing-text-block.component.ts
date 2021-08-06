import { Component, Input, OnInit } from '@angular/core';
import { LandingTextBlockModel } from './landing-text-block-model';

@Component({
  selector: 'app-landing-text-block',
  templateUrl: './landing-text-block.component.html',
  styleUrls: ['./landing-text-block.component.scss'],
})
export class LandingTextBlockComponent implements OnInit {
  @Input() public Model: LandingTextBlockModel = { title: "", subtitle: "",  text: "" };

  constructor() {}

  ngOnInit(): void {}
}
