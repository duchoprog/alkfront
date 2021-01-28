import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewOp from './components/NewOp'
import Update from './components/Update'





const App = () => {
  sessionStorage.setItem("toBeUpdated", {})
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/newop' component={NewOp} />
              <Route exact path='/update' component={Update} />

            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
};
export default App;