import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
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
  midsleephour = (this.time_sleep_vac_h + ((this.time_wake_vac_h + 24 - this.time_sleep_vac_h) % 24) / 2) % 24


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
  }



  
}
