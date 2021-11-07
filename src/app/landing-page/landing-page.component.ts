import { Component, OnInit } from '@angular/core';
import { LandingTextBlockModel } from '../landing-text-block/landing-text-block-model';
import { PartnerLinkModel } from '../partner-link/partner-link-model';

const exampleUrl: string = '';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public readonly landingTextBlockModels: LandingTextBlockModel[];
  public readonly ourPartners: PartnerLinkModel[];
  public readonly supporter: PartnerLinkModel[];

  constructor() {

    this.landingTextBlockModels = [
      {
        title: 'Über uns',
        image: exampleUrl + '/assets/about.jpg',
        navLink: '/about',
        subtitle: 'Imkerei Brenner + Litmeier',
        text: 'Die Imkerei wurde 2014 von mir gegründet. Nach dem interessanten Einführungstag in Hohenheim und einem spannenden Jungimker-Kurs beim BV Nagold ging es los. Hier wurden uns viele Neuigkeiten und die Arbeiten im Bienenjahr in Praxis und Theorie gezeigt und die ersten beiden Völker wurden angeschafft.',
      },
      {
        title: 'Die Biene',
        image: exampleUrl + '/assets/honey.jpg',
        navLink: '/bee',
        subtitle: 'Botschafterin für mehr Artenvielfalt',
        text: 'Die Biene befindet sich auf einem Höhenflug. Als sympathische Botschafterin für mehr Artenvielfalt ist die Popularität der fleißigen Pollen-Sammlerin nicht völlig neu. Bekommt sie doch durch den Nachhaltigkeitstrend Aufwind und auch durch die aufrüttelnden Nachrichten über das Insektensterben.',
      },
      {
        title: 'Naturnahe Firmengelände',
        image: exampleUrl + '/assets/peter_bees.jpg',
        navLink: '/project',
        subtitle: 'Gemeinsam für die Artenvielfalt',
        text: 'Bei Fahrten durch verschiedene Gewerbegebiete ist uns aufgefallen, dass viele kurzgemähte Grünflächen die Firmengelände zieren, Büsche, Sträucher und Bäume säumen die Ränder. Für unsere heimischen Insekten und Vögel meistens nicht der optimale Lebensraum. Deshalb haben wir ein Konzept entwickelt, sodass auch mehr Lebensräume in Firmengelände für Insekten, Bienen, Wildbienen, Hummeln und Vögel entstehen können.',
      },
    ];
    this.ourPartners = [
      { Logo: exampleUrl + '/assets/partner/hochdorfer.png', Href: 'https://hochdorfer.de/' },
      { Logo: exampleUrl + '/assets/partner/digel.png', Href: 'https://www.digel.de/' },
      { Logo: exampleUrl + '/assets/partner/wagon.png', Href: 'https://www.wagon-automotive.de/' },
      { Logo: exampleUrl + '/assets/partner/volksbank.png', Href: 'https://www.vbhnr.de/' },
      { Logo: exampleUrl + '/assets/partner/dieda.png', Href: 'https://dieda.de/' },
    ];
    this.supporter = [
      { Logo: exampleUrl + '/assets/supporter/leader_hg.png', Href: 'https://www.leader-heckengaeu.de/foerderung/regionalbudget-projekte/159-artenvielfalt-gechingen-2' },
    ];
  }

  ngOnInit(): void {}
}
