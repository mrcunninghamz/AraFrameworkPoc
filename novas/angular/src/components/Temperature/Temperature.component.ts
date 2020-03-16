import { Component, Inject, OnInit } from '@angular/core';
import template from './Temperature.component.html';
import { HYPERNOVA_DATA } from 'hypernova-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemperatureService, WeatherReport } from './TemperatureService';

@Component({
  template,
})
export class TemperatureComponent implements OnInit {

  constructor(@Inject(HYPERNOVA_DATA) data: any, private service: TemperatureService) {
    console.log("constructor")
    console.log(data)
  }

  ngOnInit(){
    console.log("init")
  }
}
