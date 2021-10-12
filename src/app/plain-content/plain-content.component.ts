import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PlainContentModel } from './plain-content-model';

@Component({
  selector: 'app-plain-content',
  templateUrl: './plain-content.component.html',
  styleUrls: ['./plain-content.component.scss']
})
export class PlainContentComponent implements  AfterViewInit {

  @ViewChild('plainContentContainer') container?: ElementRef<HTMLDivElement>;
  @Input() model?: PlainContentModel;
  
  constructor() { }

  ngAfterViewInit(): void {
    if(this.container != undefined && this.model != undefined){
      this.setupPage(this.container.nativeElement, this.model);      
    }
  }

  private setupPage(container: HTMLDivElement, model: PlainContentModel): void {
   
    if(model.style != undefined){
      this.addStyleElement(container, model.style);
    }

    var childDiv = new HTMLDivElement();
    childDiv.innerHTML = model.content;
    container.appendChild(childDiv);

  }

  private addStyleElement(container: HTMLDivElement, style: string) {
    var styleElement = new HTMLStyleElement();
    styleElement.innerHTML = style;
    container.appendChild(styleElement);
  }

}
