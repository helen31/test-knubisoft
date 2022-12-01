import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-color-list',
  template: ``,
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent {
  // @ts-ignore
  private _color: string;
  @Input() set color(value: string) {
    this._color = value;

    this.setBackgroundColor(this._color);
  };

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  private setBackgroundColor(color: string):void {
    this.renderer.setAttribute(this.elem.nativeElement, 'style', `background-color: ${color}`);
  }
}
