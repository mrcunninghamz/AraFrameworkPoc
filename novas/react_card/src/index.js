import { mountComponent, loadById, load } from 'nova-react';

import ReactCard from './components/ReactCard';

const render = (name, { node, data }) => {
  if (name === 'ReactCard') {
    return mountComponent(ReactCard, node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('ReactCard').forEach(render.bind(null, 'ReactCard'))
