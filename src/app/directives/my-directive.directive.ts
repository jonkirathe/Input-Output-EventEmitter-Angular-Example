import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  @Input('appMyDirective') delay = 0;
  @Input('appMyDirectiveThen') placeHolder: TemplateRef<any> | null = null;

  constructor(private viewContainerRef: ViewContainerRef, private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeHolder) {
        this.viewContainerRef.createEmbeddedView(this.placeHolder);
      }
    }, this.delay)
  }

}
