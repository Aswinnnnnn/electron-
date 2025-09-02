import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <div>
      <h1>Welcome details micro app</h1>
    </div>
    <button (click)="showHostname()">Show Hostname</button>
    <div style="margin-top:12px;">
      <strong>Hostname:</strong> {{ hostname }}
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
  hostname = '';

  showHostname() {
    try {
      // cast window to any to avoid TS errors when you don't have typings
      const sys = (window as any).system;
      this.hostname =
        sys && typeof sys.getHostname === 'function'
          ? sys.getHostname()
          : 'hostname-not-available';
    } catch (e) {
      this.hostname = 'error reading hostname';
    }
  }
}
