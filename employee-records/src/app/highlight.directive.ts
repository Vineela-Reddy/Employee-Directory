import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') age!: number;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['age']) {
      this.highlight();
    }
  }

  private highlight(): void {
    if (this.age < 28) {
      this.el.nativeElement.style.backgroundColor = 'orange';
    } else if (this.age > 42) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = ''; 
    }
  }
}
