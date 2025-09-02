import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <div class="counter">
      <button type="button" (click)="dec()">-</button>
      <span class="value">{{ count() }}</span>
      <button type="button" (click)="inc()">+</button>
      <button type="button" class="button-reset" (click)="reset()">Reset</button>
    </div>
  `,
  styles: [
    `
      .counter {
        display: inline-flex;
        gap: 0.5rem;
        align-items: center;
        padding: 1rem;
      }
      .value {
        min-width: 2rem;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
      }
      button {
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #f7f7f7;
        cursor: pointer;
      }
      .button-reset{
        width: auto;
        padding: 0 1rem;
        color: #fafafdff;
        background: #0000ffff;
      }
      button:active {
        background: #eaeaea;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
  count = signal(0);

  inc(): void {
    this.count.set(this.count() + 1);
  }

  dec(): void {
    this.count.set(this.count() - 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
