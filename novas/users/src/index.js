import { mountComponent, loadById, load } from 'nova-react';

import Example from './components/Example';
import UserAvatar from './components/UserAvatar/UserAvatar';
import Profile from './components/Profile/Profile';

const render = (name, { node, data }) => {
  if (name === 'Example') {
    return mountComponent(Example, node, data)
  }

  if (name === 'UserAvatar') {
    return mountComponent(UserAvatar, node, data)
  }

  if(name === 'Profile'){
    return mountComponent(Profile, node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Example').forEach(render.bind(null, 'Example'))
load('UserAvatar').forEach(render.bind(null, 'UserAvatar'))
load('Profile').forEach(render.bind(null, 'Profile'))
