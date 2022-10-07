import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

   country: string = 'Kenya';
   message!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getMessage($event: string) {
    this.message = $event;
  }
}
