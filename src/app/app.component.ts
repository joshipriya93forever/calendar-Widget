import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate;
  calendarProperty = {
    isCalendarOpen: false
  };
  onSelectDate(obj) {
    this.selectedDate = obj;
  }
}
