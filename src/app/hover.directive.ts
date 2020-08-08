import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color ='green';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el.nativeElement)
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement,'background-color', this.color)
  }

  @HostListener('mouseover')
  onmouseover() {
    this.renderer.setStyle(this.el.nativeElement,'background-color', 'red')
  }

  @HostListener('mouseout')
  onmouseout() {
    this.renderer.setStyle(this.el.nativeElement,'background-color', 'white')
  }

}
