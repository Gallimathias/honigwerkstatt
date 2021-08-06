import { Component, OnInit } from '@angular/core';
import { LandingTextBlockModel } from '../landing-text-block/landing-text-block-model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public landingTextBlockModels: LandingTextBlockModel[];


  constructor() { 
    this.landingTextBlockModels = [
      {title: "Über uns", subtitle: "Die jungen leiden", text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine."},
      {title: "Bienen", subtitle: "Die jungen leiden", text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine."},
      {title: "Kosta Quanta", subtitle: "Die jungen leiden", text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine."},
    ];
  }

  ngOnInit(): void {
  }

}
