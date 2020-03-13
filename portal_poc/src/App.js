import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Grid, GridCell } from '@rmwc/grid';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust, TopAppBarActionItem} from '@rmwc/top-app-bar';
import { Nova } from 'nova-react-bridge';

import NavDrawer from './components/NavDrawer/NavDrawer'
import Home from './components/Home/Home';

import './App.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function App() {
  return (
    <Router>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>Ara Framework POC</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <Nova name="UserAvatar"/>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <Grid>
        <GridCell span={2}>
          <NavDrawer></NavDrawer>
        </GridCell>
        <GridCell span={10}>
        <Switch>
          <Route path="/profile">
            <Nova name="Profile"/>
          </Route>
          <Route path="/weather">
            <Nova name="Temperature"/>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
        </GridCell>
      </Grid>
    </Router>
  );
}

export default App;
