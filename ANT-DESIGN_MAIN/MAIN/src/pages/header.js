import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import ButtonComponent from './page1';
import LayoutComponent from './page2';
import InputComponent from './page3';
import CardComponent from './page4';
import MessageComponent from './page5';

const App = () => {
  

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
              <li>
                <Link to="/page3">Page 3</Link>
              </li>
              <li>
                <Link to="/page4">Page 4</Link>
              </li>
              <li>
                <Link to="/page5">Page 5</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/page1" element={<ButtonComponent />} />
            <Route path="/page2" element={<LayoutComponent />} />
            <Route path="/page3" element={<InputComponent />} />
            <Route path="/page4" element={<CardComponent />} />
            <Route path="/page5" element={<MessageComponent />} />

            <Route path="/" element={
              <div>
                
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;