import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngDirectiveDemo';
  cardNumber;
  checkCardType(event: any) {
      this.cardNumber = event.target.value;
      console.log(this.cardNumber);
  }
}
