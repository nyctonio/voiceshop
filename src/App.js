import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Home} from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
