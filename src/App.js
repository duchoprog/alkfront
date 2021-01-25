import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewOp from './components/NewOp'





const App = () => {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/newop' component={NewOp} />

            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
};
export default App;