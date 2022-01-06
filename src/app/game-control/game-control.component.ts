import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() intervalFired= new EventEmitter<number>();
  lastnumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startFunc(){
    this.interval = setInterval(() =>{
      this.intervalFired.emit(this.lastnumber+1);
      this.lastnumber++;
    },1000)
  }

  stopFunc(){
    clearInterval(this.interval);
  }

}
