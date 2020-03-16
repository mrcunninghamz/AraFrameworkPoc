import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import * as hypernova from 'hypernova/server'
import { renderAngular } from 'hypernova-angular/server'
import * as express from 'express'
import * as path from 'path'

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component'
import { TemperatureComponent } from './components/Temperature/Temperature.component';
import { TemperatureModule } from './components/Temperature/Temperature.module';

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  processJobsConcurrently: true,

  getComponent (name) {
    if (name === 'Example') {
      return renderAngular(name, ExampleComponent, ExampleModule)
    }
    if (name === 'Temperature') {
      return renderAngular(name, TemperatureComponent, TemperatureModule)
    }
  },
  port: process.env.PORT || 3000,

  createApplication () {
    const app = express()

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
