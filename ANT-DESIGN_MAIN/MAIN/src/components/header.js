import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import EditableTable from '../pages/page1';
import ButtonComponent from '../pages/page2';
import LayoutComponent from '../pages/page2';
import InputComponent from '../pages/page3';
import CardComponent from '../pages/page4';
import MessageComponent from '../pages/page5';

const App = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Page 1 (ButtonComponent)</Link>
              </li>
              <li>
                <Link to="/page2">Page 2 (LayoutComponent)</Link>
              </li>
              <li>
                <Link to="/page3">Page 3 (InputComponent)</Link>
              </li>
              <li>
                <Link to="/page4">Page 4 (CardComponent)</Link>
              </li>
              <li>
                <Link to="/page5">Page 5 (MessageComponent)</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/" exact component={EditableTable} />
            <Route path="/page1" component={ButtonComponent} />
            <Route path="/page2" component={LayoutComponent} />
            <Route path="/page3" component={InputComponent} />
            <Route path="/page4" component={CardComponent} />
            <Route path="/page5" component={MessageComponent} />
          </Switch>
        </div>
      </Router>
    );
  };
  
  export default App;