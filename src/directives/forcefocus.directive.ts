import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: "[forcefocus]"
})

export class forceFocus {
	constructor( private _el: ElementRef, private renderer: Renderer ) {
		
	}

	ngOnInit() {
		this.renderer.invokeElementMethod( this._el.nativeElement, 'focus' );
  	}
}