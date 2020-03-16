# AraFrameworkPoc

Ara Framework is a framework that allows for the development of microfrontends that comes complete with a CLI for creating micofrontend services called "nova services".

The wrapper app or the application that holds the layout for the microfront ends is called the "host application" and needs to be created using a js framework.

## Create a host application

The host application will be in react using `create-react-spa`

### install in the project: 
- npm i nova-react-bridge --save
- npm i nova-helpers --save



Update application host by creating views.json in src folder:
```json
{
  "ReactCard": "http://localhost:8080/client.js"
}
```

A single microfront end can make available multiple components. The example below has a microfront end with 2 components it returns. The team is responsible for anything reatled to users and their information and have created a UserAvatar component and a Profile component.
```json
{
    "Temperature": "http://localhost:8080/client.js",
    "Profile": "http://localhost:9000/client.js",
    "UserAvatar": "http://localhost:9000/client.js"
}
```

### Consuming microfrontends in host application

The following needs to be added to the `index.js` file. The `views.json` from above is consumed as `entryPoints` and is loaded as a Nova component thorugh the `loadScript` function provided by the nova-helpers library.

```javascript
import entryPoints from './views.json';
import { loadScript } from 'nova-helpers';

document.addEventListener('NovaMount', ({ detail }) => {
    const { name } = detail;
  
    const script = entryPoints[name];
  
    if (script) {
      loadScript(script);
    }
  });
```

### Rendering microfrontend component in views

The Nova component requires the props name and data
- name is the registered Nova View.
- data is the data necessary to render the view.

```javascript
import { Nova } from 'nova-react-bridge'

const Page = () => (
  <div>
    <Nova 
      name="NavBar"
      data={{ brand: 'Ara Framework', links: [{ url: 'https://github.com/ara-framework', text: "Github" }]}}
    />
  </div>
)
```

## Create nova services

Make sure you have ara cli

```
npm i -g ara-cli
```

Then create new nova
```
Ara new:nova novas/react_card -t react
```
Type `n` for client side rendering.

Go to novas/react_card and run the node server
```
npm run dev
```

Add this line to your module.rules in the webpack.config.js if your nova is using css

```json
{
  test: /\.css$/,
  use: [
    'css-loader'
  ]
}
```

### Registering components

The `index.js` of a nova service should look like this.

```javascript
import { mountComponent, loadById, load } from 'nova-react';

import UserAvatar from './components/UserAvatar/UserAvatar';
import Profile from './components/Profile/Profile';

const render = (name, { node, data }) => {
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

load('UserAvatar').forEach(render.bind(null, 'UserAvatar'))
load('Profile').forEach(render.bind(null, 'Profile'))
```

The components are imported and then mounted based on the reqest made by the host application.