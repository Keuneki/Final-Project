import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllElements from './pages/AllElements';
import SingleElement from './pages/SingleElement';
import AllMagic from './pages/AllMagic';
import SingleMagic from './pages/SingleMagic';
import PureMagic from './pages/PureMagic';
import MixedMagic from './pages/MixedMagic';
import MagicBuilder from './components/MagicBuilder';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllElements} />
        <Route path="/element/:id" component={SingleElement} />
        <Route exact path="/magic-builder" component={MagicBuilder} />
        <Route exact path="/magic" component={AllMagic} />
        <Route path="/magic/:id" component={SingleMagic} />
        <Route path="/pure-magic" component={PureMagic} />
        <Route path="/mixed-magic" component={MixedMagic} />
      </Switch>
    </Router>
  );
};

export default App;
