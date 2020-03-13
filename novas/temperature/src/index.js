import { mountComponent, loadById, load } from 'nova-react';

import Temperature from './components/Temperature/Temperature';

const render = (name, { node, data }) => {
  if (name === 'Temperature') {
    return mountComponent(Temperature, node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Temperature').forEach(render.bind(null, 'Temperature'))
