import { Component } from '@angular/core';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css']
})
export class MainBoxComponent {


  // Input
  time_sleep_vac = {hour: 23, minute: 30};
  time_wake_vac = {hour: 7, minute: 30};
  time_sleep_vac_h = (
    this.time_sleep_vac.hour + 
    this.time_sleep_vac.minute / 60
  )
  time_wake_vac_h = (
    this.time_wake_vac.hour + 
    this.time_wake_vac.minute / 60
  )
  midsleephour = (this.time_sleep_vac_h + ((this.time_wake_vac_h + 24 - this.time_sleep_vac_h) % 24) / 2) % 24;
  chronotype = "afternoon"


  update() {
  this.time_sleep_vac_h = (
    this.time_sleep_vac.hour + 
    this.time_sleep_vac.minute / 60
    )
  this.time_wake_vac_h = (
    this.time_wake_vac.hour + 
    this.time_wake_vac.minute / 60
    )
  this.midsleephour = (this.time_sleep_vac_h + ((this.time_wake_vac_h + 24 - this.time_sleep_vac_h) % 24) / 2) % 24
  
  if (this.midsleephour >= 0 && this.midsleephour < 3) {
    this.chronotype = "morning";
  } else if (this.midsleephour >= 3 && this.midsleephour < 6) {
    this.chronotype = "afternoon";
  } else if (this.midsleephour >= 6 && this.midsleephour < 9) {
    this.chronotype = "evening";
  } else {
    this.chronotype = "night";
  } 


}
}
