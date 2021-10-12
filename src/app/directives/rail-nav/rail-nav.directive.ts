import { AfterViewChecked, forwardRef, Inject } from '@angular/core';
import { Directive, ElementRef, Host, Renderer2, Self } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

const className: string = 'app-rail-nav-directive-container';

@Directive({
  selector: '[appRailNav]',
})
export class RailNavDirective implements AfterViewChecked {
  private sideNavContent?: HTMLElement;

  constructor(
    private readonly renderer2: Renderer2,
    private readonly element: ElementRef<HTMLElement>,
    @Host() @Self() private readonly sideNav: MatSidenav,
    @Inject(forwardRef(() => MatSidenavContainer))
    private readonly sideNavContainer: MatSidenavContainer
  ) {
    
  }

  ngAfterViewChecked(): void {

    this.sideNavContent =
      this.element.nativeElement?.parentElement?.querySelector(
        '.mat-drawer-content'
      ) ?? undefined;

    if (this.sideNav.opened) {
      this.disableRailMode(this.element.nativeElement);
    } else {
      this.enableRailMode(this.element.nativeElement);

      if (this.sideNavContent != undefined) {
        let width = this.element.nativeElement.clientWidth + 'px';
        this.renderer2.setStyle(this.sideNavContent, 'marginLeft', width);
      }
    }
  }

  private enableRailMode(element: HTMLElement): void {
    element.classList.add(className);
    this.renderer2.setStyle(
      this.element.nativeElement,
      'visibility',
      'visible'
    );
    this.renderer2.setStyle(
      this.element.nativeElement,
      'transform',
      'translate3d(0, 0, 0)'
    );
  }

  private disableRailMode(element: HTMLElement): void {
    element.classList.remove(className);
    this.renderer2.removeStyle(this.element.nativeElement, 'visibility');
  }
}
