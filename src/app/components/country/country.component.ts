import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

const countryNames = require("../../../assets/data/countries.json");


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  private _country: string = 'Kenya';
  count: number = 0;

  @Output()
  public showMessage = new EventEmitter<string>();

  @Input()
  public set country(country: string) {
    this._country = country;
  }

  public get country() {
    return this._country;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.showMessage.emit('NOW YOU KNOW HOW TO USE @OUPUT, @INPUT AND EVENTEMITTER IN ANGULAR')
  }

  changeCountryName() {
    this._country = countryNames[this.count++];
    console.log('_country', this._country);
  }
}
