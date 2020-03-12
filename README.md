# AraFrameworkPoc

## Create a host application

### The host application will be in react using `create-react-spa`

### install in the project: 
- npm i nova-react-bridge --save
- npm i nova-helpers --save



Update application host by creating views.json in src folder:
```json
{
  "ReactCard": "http://localhost:8080/client.js"
}
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
