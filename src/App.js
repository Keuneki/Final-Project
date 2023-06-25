import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MagicBuilder from './pages/MagicBuilder';
import AllElements from './pages/AllElements';
import SingleElement from './pages/SingleElement';
import Index from './pages/Index';
import Magic from './pages/Magic';
import AllClasses from './pages/AllClasses';
import SingleClass from './pages/SingleClass';
import BasicClass from './pages/BasicClass';
import AdvancedClass from './pages/AdvancedClass';
import MasterClass from './pages/MasterClass';
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/magic-builder">Magic Builder</Link>
            </li>
            <li>
              <Link to="/all-elements">All Elements</Link>
            </li>
            <li>
              <Link to="/single-element">Single Element</Link>
            </li>
            <li>
              <Link to="/all-classes">All Classes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/magic-builder" component={MagicBuilder} />
          <Route path="/all-elements" component={AllElements} />
          <Route path="/single-element/:id" component={SingleElement} />
          <Route exact path="/all-classes" component={AllClasses} />
          <Route path="/class/:id" component={SingleClass} />
          <Route path="/basic-class" component={BasicClass} />
          <Route path="/magic" component={Magic} />
          <Route path="/advanced-class" component={AdvancedClass} />
          <Route path="/master-class" component={MasterClass} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
