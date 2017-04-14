import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'drive';
  driver = "Vous";
  passengers = ["François","Xavier"];
  donotlist = ["Marie"];

constructor() { }

  drive(): void {
    this.selected = 'drive';
    this.driver = "Vous";
    if (this.passengers.indexOf("Vous") != -1) {
      this.passengers.splice(this.passengers.indexOf("Vous"), 1);
    }
    if (this.donotlist.indexOf("Vous") != -1) {
      this.donotlist.splice(this.donotlist.indexOf("Vous"), 1);
    }

  }

  passenger(): void {
    this.selected = 'passenger';
    this.driver = "";
    if (this.passengers.indexOf("Vous") == -1) {
      this.passengers.push("Vous");
    }
    if (this.donotlist.indexOf("Vous") != -1) {
      this.donotlist.splice(this.donotlist.indexOf("Vous"), 1);
    }

  }

  donot(): void {
    this.selected = 'donot';
    this.driver = "";
    if (this.passengers.indexOf("Vous") != -1) {
      this.passengers.splice(this.passengers.indexOf("Vous"), 1);
    }
    if (this.donotlist.indexOf("Vous") == -1) {
      this.donotlist.push("Vous");
    }
  }
}
