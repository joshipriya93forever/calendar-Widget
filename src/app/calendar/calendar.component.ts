import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'CustomCalendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @Input('cust-calendar') isCalendarOpen = false;
  @Output() showdate = new EventEmitter();
  isFlexible = 'yes';
  isCurrentYear = true;
  today;
  nextYear;
  currentDate;
  currentMonth;
  currentYear;
  selectedDate;
  selectedYear;
  selectedMonth;
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  daysLabel = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  private row1: any = [];
  private row2: any = [];
  private row3: any = [];
  private row4: any = [];
  private row5: any = [];
  private row6: any = [];
  constructor() {
    this.today = new Date();
    this.currentDate = this.today.getDate();
    this.nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.selectedYear = this.today.getFullYear();
    this.selectedMonth = this.today.getMonth();
    this.getDates(this.selectedMonth);
  }
  openCalander() {                            // opens the calendar container
    if (this.isCalendarOpen === false) {
      this.isCalendarOpen = true;
    }
    else {
      this.isCalendarOpen = false;
    }
  }
  getMonths(yr) {
    this.selectedYear = yr.getFullYear();
    if (this.selectedYear === this.currentYear) {
      this.isCurrentYear = true;
      this.getDates(this.currentMonth);
    }
    else {
      this.isCurrentYear = false;
      this.getDates(this.selectedMonth);
    }
  }

  getDates(month) {
    this.row1 = [];
    this.row2 = [];
    this.row3 = [];
    this.row4 = [];
    this.row5 = [];
    this.row6 = [];
    this.selectedMonth = month;
    let dayIndex = new Date(this.selectedYear, month, 1).getDay();
    let endIndex = new Date(this.selectedYear, month + 1, 0).getDate();
    let days = this.daysLabel;
    let counter = 1;
    for (let i = 0; i < (dayIndex + endIndex); i++) {
      if ( i < dayIndex) {
        this.row1[i] = null;
        continue;
      }
      if ( i < 7) {
        this.row1[i] = counter;
      }
      else if (i < 14 ) {
        this.row2.push(counter);
      }
      else if (i < 21 ) {
        this.row3.push(counter);
      }
      else if (i < 28 ) {
        this.row4.push(counter);
      }
      else if (i < 35) {
        this.row5.push(counter);
      }
      else if (i < 42) {
        this.row6.push(counter);
      }
      counter++;
    }
  }
  getSelectedDate(pickedDate) {
    this.selectedDate = new Date(this.selectedYear, this.selectedMonth, pickedDate);
    this.showdate.emit(this.selectedDate);
    this.isCalendarOpen = false;
  }
  close() {
    this.isCalendarOpen = false;
  }

}
