import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() age!: number;

  constructor(private el: ElementRef) {}
  ngOnInit():void{
    this.highlight();
  }

   highlight(): void {
    if (this.age < 28) {
      this.el.nativeElement.style.backgroundColor = 'orange';
    } else if (this.age > 42) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = ''; 
    }
  }
}
