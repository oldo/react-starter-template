import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './context';

import Home from './containers/home/home';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
