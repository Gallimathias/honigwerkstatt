import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowInformationService {

  public IsMobile: boolean = false;

  constructor() {
    this.IsMobile = window.outerWidth < 426;
    
    window.onresize = () => {
      this.IsMobile = window.outerWidth < 426;
    };

  }
}
