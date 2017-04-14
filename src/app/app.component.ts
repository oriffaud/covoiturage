import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'drive';

  drive(): void {
    this.selected = 'drive';
  }
  passenger(): void {
    this.selected = 'passenger';
  }
  donot(): void {
    this.selected = 'donot';
  }
}
