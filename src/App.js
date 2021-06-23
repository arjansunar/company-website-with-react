import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <Router>
      <Route path='/'>
        <Home />
      </Route>

    </Router>
  );
}

export default App;
