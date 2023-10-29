import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({opacity: 0 }),
            animate('2s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('2s ease-in', 
                    style({opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class MainBoxComponent {

  checkVowel(chronostring: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.some(vowel => chronostring.startsWith(vowel)) ? 'an' : 'a'
  }
  

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
