import { AnimationBuilder, animate, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/*Que el selector esté entre "[]" significa que es de tipo atributo, solo se agrega y ya está*/
@Directive({
  selector: '[wobble]',
  standalone: true,
})
/*Quitamos el constructor porque no lo necesitamos*/
export class WobbleDirective {
  elementRef: ElementRef = inject(ElementRef);

  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder
    .build([
      style({ transform: 'translateX(0)' }),
      animate('300ms', style({ transform: 'translateX(-5px)' })),
      animate('300ms', style({ transform: 'translateX(5px)' })),
      animate('300ms', style({ transform: 'translateX(-5px)' })),
      animate('300ms', style({ transform: 'translateX(5px)' })),
      animate('300ms', style({ transform: 'translateX(0)' })),
    ])
    .create(this.elementRef.nativeElement);

  private playAnimation() {
    this.player.play();
    this.player.onDone(() => {
      this.player.reset();
      this.player.play();
    });
  }

  private stopAnimation() {
    if (this.player) {
      this.player.pause();
      this.player.reset();
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.playAnimation();
  }

  @HostListener('mouseleave') onMouseLeav() {
    this.stopAnimation();
  }
}
