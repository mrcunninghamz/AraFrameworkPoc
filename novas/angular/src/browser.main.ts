import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import { load, mountComponent, loadById } from 'hypernova-angular'

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component'
import { TemperatureComponent } from './components/Temperature/Temperature.component';
import { TemperatureModule } from './components/Temperature/Temperature.module';

const render = (name, { node, data }) => {
  if (name === 'Example') {
    return mountComponent(ExampleComponent, ExampleModule, node, data)
  }

  if (name === 'Temperature') {
    return mountComponent(TemperatureComponent, TemperatureModule, node, data)
  }
}

document.addEventListener('NovaMount', (event) => {
  const { name, id } = (<CustomEvent>event).detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})


load('Example').forEach(render.bind(null, 'Example'))
load('Temperature').forEach(render.bind(null, 'Temperature'))
