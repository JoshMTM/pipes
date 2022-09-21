import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date = '';
  amount!: number;
  miles!: number;

  car = {
    make: "Toyota",
    model: "Camry",
    year: "2000"
  };

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onNameChange( value: string ) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onChangeAmount(value: string) {
    this.amount = parseFloat(value); 
  }
}
