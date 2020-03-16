import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureComponent } from './Temperature.component';
import { TemperatureService } from './TemperatureService';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    TemperatureComponent,
  ]
})
export class TemperatureModule {}