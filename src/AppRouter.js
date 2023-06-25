import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Magic from '/pages/Magic';
import SingleElement from './pages/SingleElement';
import AllElements from './pages/AllElements';
import AllClasses from './pages/AllClasses';
import SingleClass from './pages/SingleClass';
import BasicClass from './pages/BasicClass';
import AdvancedClass from './pages/AdvancedClass';
import MasterClass from './pages/MasterClass';
import Reviews from './pages/Reviews';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/element/:id" component={SingleElement} />
        <Route path="/allelements" component={AllElements} />
        <Route exact path="/allclasses" component={AllClasses} />
        <Route path="/class/:id" component={SingleClass} />
        <Route path="/basicclass" component={BasicClass} />
        <Route path="/magic" component={Magic} />
        <Route path="/advancedclass" component={AdvancedClass} />
        <Route path="/masterclass" component={MasterClass} />
        <Route path="/reviews" component={Reviews} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
