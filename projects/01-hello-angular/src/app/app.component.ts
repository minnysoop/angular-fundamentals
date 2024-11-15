import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Don't Let the Pigeon Drive the Bus!</li>
      <li>ETA - NewJeans</li>
      <li>The Dark Knight</li>
    </ol>
  `,
  styles: `ol {list-style-type: upper-roman;}`,
})
export class AppComponent {}
